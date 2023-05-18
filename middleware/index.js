import fs from 'fs';
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import { Contract, Wallet, ethers } from "ethers";
import jwt_decode from 'jwt-decode';
import crypto from 'crypto';
import { server } from '@passwordless-id/webauthn' 

import { RecoveryAccount, RecoveryModule } from './models.js';

const SocialRecoveryModule = fs.readFileSync('SocialRecoveryModule.json', 'utf8')

const wallet = new Wallet(process.env.GUARDIAN_WALLET_KEY)

const providerBase = new ethers.JsonRpcProvider('https://restless-young-layer.base-goerli.discover.quiknode.pro/3860a9e7a99900628604b143682330d4cec99db0');
const signerBase  = wallet.connect(providerBase)

const providerPolygon = new ethers.JsonRpcProvider('https://matic-mainnet.chainstacklabs.com');
const signerPolygon  = wallet.connect(providerPolygon)

const providerGnosis = new ethers.JsonRpcProvider('https://rpc.gnosischain.com');
const signerGnosis  = wallet.connect(providerGnosis)



const app = express();
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

mongoose.connect(process.env.RECOVERY_DB, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});


app.get('/', async (req, res) => {
  res.send('gm');
});

app.get('/accounts', async (req, res) => {
  const accounts = await RecoveryAccount.find();
  const response = {status: true, data: accounts}
  res.json(response);
});


app.get('/recovery-account', async (req, res) => {
  

  const account_details = await RecoveryAccount.find({recoveryEmailHash: req.query.recoveryEmailHash});
  if(account_details.length) {
    let response = {status: true, data: account_details[0]}
    res.json(response);
    return;
  }
  
  let response = { status: false, data: 'Account not found' }
  res.json(response);
});

app.post('/account', async (req, res) => {

  try {
  const account = new RecoveryAccount(req.body);
  await account.save();
  const response = {status: true, data: account}
  res.json(response);
  }
  catch(e) {
    const response = {status: false, data: e.message}
    res.json(response)
  }
});

app.post('/recovery-module', async (req, res) => {

  try {
  const recovery = new RecoveryModule(req.body);
  await recovery.save();
  const response = {status: true, data: recovery}
  res.json(response);
  }
  catch(e) {
    const response = {status: false, data: e.message}
    res.json(response)
  }
});

app.get('/recovery-module', async (req, res) => {
  const recovery = await RecoveryModule.find();
  const response = {status: true, data: recovery}
  res.json(response);
});


app.post('/recovery', async (req, res) => {

  try {
  const recovery_modules = await RecoveryModule.find({chainId: req.body.chainId});  
  const account_details = await RecoveryAccount.find({recoveryEmailHash: req.body.recoveryEmailHash});

  if(req.body.type == 'biometric') {
  const expected = {
    challenge: "a7c61ef9-dc23-4806-b486-2428938a547e", // whatever was randomly generated by the server.
    origin: process.env.WEBAUTHN_ORIGIN,
  }
  
  const authenticationParsed = await server.verifyRegistration(req.body.webAuthnData, expected)

  }

  let account;
  if(account_details.length) { 
    const response = {status: false, data: account_details[0]}
    account = await RecoveryAccount.findOneAndUpdate({recoveryEmailHash: req.body.recoveryEmailHash}, { $set: {webAuthnCreds: req.body.webAuthnData.credential, safeAddress: req.body.safeAddress, recoveryModuleAddress: recovery_modules[0].recoveryModuleAddress, chainId: req.body.chainId}})

    }
    else {
    account = new RecoveryAccount({recoveryEmailHash: req.body.recoveryEmailHash, webAuthnCreds: req.body.webAuthnData.credential, safeAddress: req.body.safeAddress, recoveryModuleAddress: recovery_modules[0].recoveryModuleAddress, chainId: req.body.chainId});
    await account.save();
  }
  const response = {status: true, data: account}
  res.json(response);

  }
  catch(e) {
    console.log(e)
    const response = {status: false, data: e.message}
    res.json(response);
  }
});



app.post('/recover', async (req, res) => {

  let account_details;
  try {
    
    // Verify and decode the JWT
    // const jwks = jose.createRemoteJWKSet(new URL("https://api.openlogin.com/jwks"));
    // const jwtDecoded = await jose.jwtVerify(idToken, jwks, { algorithms: ["ES256"] });
    
      if( req.body.type == 'email') {
        var jwtDecoded = jwt_decode(req.body.idToken);
        const decodedEmailHash = crypto.createHash('sha256').update(jwtDecoded.email).digest('hex');

      if(decodedEmailHash != req.body.recoveryEmailHash) {
        throw new Error('Email verification failed');
      }
    }

     account_details = await RecoveryAccount.find({recoveryEmailHash: req.body.recoveryEmailHash});

    console.log(account_details[0])

    let signer;

    if(account_details[0].chainId == 137) {
      signer = signerPolygon;
    }

    else if(account_details[0].chainId == 84531) {
      signer = signerBase;
    }

    else  {
      signer = signerBase;
    }

    console.log(account_details[0].recoveryModuleAddress)

    const recoveryModuleInstance = new Contract(account_details[0].recoveryModuleAddress, JSON.parse(SocialRecoveryModule).abi, signer)

    console.log(await recoveryModuleInstance.getGuardians(account_details[0].safeAddress))
    const respp = await recoveryModuleInstance.confirmRecovery(account_details[0].safeAddress,  [req.body.newOwner], 1, true)
    const receipt = await respp.wait();
    console.log(respp)
     await recoveryModuleInstance.finalizeRecovery(account_details[0].safeAddress)
   

    const response = {status: true, data: account_details[0]}
    res.json(response);
  }
  catch(e) {
    console.log(e)
    const response = {status: false, data: account_details[0]}
    res.json(response)
  }
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});