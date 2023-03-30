const fs = require('fs');
const { ethers, Wallet} = require('ethers');


privateKey = 'f0b9e47140841ef84ada35b59db473106e83135ae2c31ac15b8c3cfc8e99864a'
// privateKey = '0xf46d4d5c6dd19ba7eeadfc7ee908bbd255137c4e77cbe6f2b38384d612e682b2'

async function main() {
  const guardianStorage = fs.readFileSync('GuardianStorage.json', 'utf8')
  const SocialRecoveryModule = fs.readFileSync('SocialRecoveryModule.json', 'utf8')


  const wallet = new Wallet(privateKey)

  const provider = new ethers.JsonRpcProvider('https://restless-young-layer.base-goerli.discover.quiknode.pro/3860a9e7a99900628604b143682330d4cec99db0');
  signer  = wallet.connect(provider)


  const factory = new ethers.ContractFactory(JSON.parse(guardianStorage).abi, JSON.parse(guardianStorage).bytecode, signer)
  
  const feeData = await provider.getFeeData()
  const factoryResponse = await factory.deploy()
  console.log(factoryResponse)

  
  // console.log(feeData.gasPrice)

  
  // console.log(ethers.for(feeData.gasPrice, "wei"))
  // factory.deploy().then(async (factoryResponse) => { 

  //  await factoryResponse.waitForDeployment()

  // const sr = new ethers.ContractFactory(JSON.parse(SocialRecoveryModule).abi, JSON.parse(SocialRecoveryModule).bytecode, signer)
  // await sr.deploy(factoryResponse.target, 0)

  // console.log(factoryResponse.target) }
  // )
  
//   const NFT = await ethers.getContractFactory('GuardianStorage');
//   const nft = await NFT.deploy();

//   await nft.deployed();

//   const RecoveryM = await ethers.getContractFactory('SocialRecoveryModule');
//   const rec = await RecoveryM.deploy(nft.address, 0);
//   console.log(rec.address)

//   console.log('NFT Contract Deployed at ' + nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});