const fs = require('fs');
require('dotenv').config(); // enables loading .env vars
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { Contract, Wallet, ethers } = require("ethers");
const jose = require('jose')
const jwt_decode = require('jwt-decode');
const crypto = require('crypto');

const { RecoveryAccount, RecoveryModule } = require('./models');

const SocialRecoveryModule = fs.readFileSync('SocialRecoveryModule.json', 'utf8')

const wallet = new Wallet(process.env.GUARDIAN_WALLET_KEY)

const provider = new ethers.JsonRpcProvider('https://restless-young-layer.base-goerli.discover.quiknode.pro/3860a9e7a99900628604b143682330d4cec99db0');
signer  = wallet.connect(provider)


const app = express();
const bodyParser = require('body-parser');
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
  const recovery_modules = await RecoveryModule.find({assigned: false});  
  const account_details = await RecoveryAccount.find({recoveryEmailHash: req.body.recoveryEmailHash});
  if(account_details.length) { 
  const response = {status: true, data: account_details[0]}
  res.json(response);
  return;

  }

  const account = new RecoveryAccount({recoveryEmailHash: req.body.recoveryEmailHash, safeAddress: req.body.safeAddress, recoveryModuleAddress: recovery_modules[0].recoveryModuleAddress});
  await account.save();
  await RecoveryModule.findOneAndUpdate({recoveryModuleAddress: recovery_modules[0].recoveryModuleAddress}, { $set: {safeAddress: req.body.safeAddress, assigned: false}})
  const response = {status: true, data: account}
  res.json(response);


  }
  catch(e) {
    const response = {status: false, data: e.message}
    res.json(response)
  }
});



app.post('/recover', async (req, res) => {

  try {
    
    // Verify and decode the JWT
    // const jwks = jose.createRemoteJWKSet(new URL("https://api.openlogin.com/jwks"));
    // const jwtDecoded = await jose.jwtVerify(idToken, jwks, { algorithms: ["ES256"] });
    
    var jwtDecoded = jwt_decode(req.body.idToken);
    const decodedEmailHash = crypto.createHash('sha256').update(jwtDecoded.email).digest('hex');

    if(decodedEmailHash != req.body.recoveryEmailHash) {
      throw new Error('Email verification failed');
    }

    const account_details = await RecoveryAccount.find({recoveryEmailHash: req.body.recoveryEmailHash});

    const recoveryModuleInstance = new Contract(account_details[0].recoveryModuleAddress, JSON.parse(SocialRecoveryModule).abi, signer)

    console.log(await recoveryModuleInstance.getGuardians(account_details[0].safeAddress))
    await recoveryModuleInstance.confirmRecovery(account_details[0].safeAddress,  [req.body.newOwner], 1, true)

    await recoveryModuleInstance.finalizeRecovery(account_details[0].safeAddress)

    const response = {status: true, data: account_details[0]}
    res.json(response);
  }
  catch(e) {
    const response = {status: false, data: e.message}
    res.json(response)
  }
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});