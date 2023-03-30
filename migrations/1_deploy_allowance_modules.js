const { deployTruffleContract } = require("@gnosis.pm/singleton-deployer-truffle")
const SocialRecoveryModule = artifacts.require("SocialRecoveryModule")
const GuardianStorage = artifacts.require("GuardianStorage")

// Safe singleton factory was deployed using eip155 transaction
// If the network enforces EIP155, then the safe singleton factory should be used
// More at https://github.com/gnosis/safe-singleton-factory
const USE_SAFE_SINGLETON_FACTORY = process.env.USE_SAFE_SINGLETON_FACTORY === "true"

module.exports = function (deployer) {

  deployer.deploy(GuardianStorage).then(function (contract) {

    return deployer.deploy(SocialRecoveryModule, contract.address, 0).then(function (contract) {

      // connsole.log(contract.address)

    })
    
});
  
}


// module.exports = function(deployer) {
//   deployer.deploy(CompleteModule).then(function (dxCompleteModule) {
//       dxCompleteModule.setup(notOwnedAddress, [], [], notOwnedAddress)
//       return dxCompleteModule
//   });
//   deployer.deploy(SellerModule).then(function (dxSellerModule) {
//       dxSellerModule.setup(notOwnedAddress, [], [], notOwnedAddress)
//       return dxSellerModule
//   });
// };
