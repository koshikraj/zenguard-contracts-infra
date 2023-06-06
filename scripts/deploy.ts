import { ethers } from 'hardhat';

async function main() {
  const NFT = await ethers.getContractFactory('SampleNFT');
  const nft = await NFT.deploy('ZenGuardNFT', 'ZGD');

  const Guard = await ethers.getContractFactory('GuardianStorage');
  // const guard = await Guard.deploy();

  // await guard.deployed();

  const RecoveryM = await ethers.getContractFactory('SocialRecoveryModule');
  // const rec = await RecoveryM.deploy(guard.address, 0);

  console.log('NFT Contract Deployed at ' + nft.address);
  // console.log('Guardian storage Contract Deployed at ' + guard.address);
  // console.log('Recovery module Contract Deployed at ' + rec.address);
// 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});