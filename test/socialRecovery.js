const utils = require('@gnosis.pm/safe-contracts/test/utils/general')

const truffleContract = require("@truffle/contract")

const GnosisSafeBuildInfo = require("@gnosis.pm/safe-contracts/build/contracts/GnosisSafe.json")
const GnosisSafe = truffleContract(GnosisSafeBuildInfo)
GnosisSafe.setProvider(web3.currentProvider)
const GnosisSafeProxyBuildInfo = require("@gnosis.pm/safe-contracts/build/contracts/GnosisSafeProxy.json")
const GnosisSafeProxy = truffleContract(GnosisSafeProxyBuildInfo)
GnosisSafeProxy.setProvider(web3.currentProvider)

const GuardianStorage = artifacts.require("./GuardianStorage.sol")
const RecoveryModule = artifacts.require("./SocialRecoveryModule.sol")

contract('Social recovery', function(accounts) {
    let lw
    let gnosisSafe
    let safeModule

    const CALL = 0
    const ADDRESS_0 = "0x0000000000000000000000000000000000000000"

    beforeEach(async function() {
        // Create lightwallet
        lw = await utils.createLightwallet()

        // Create Master Copies
        guardianStore = await GuardianStorage.new()
        recoveryModule = await RecoveryModule.new(guardianStore.address, 0)

        const gnosisSafeMasterCopy = await GnosisSafe.new({ from: accounts[0] })
        const proxy = await GnosisSafeProxy.new(gnosisSafeMasterCopy.address, { from: accounts[0] })
        gnosisSafe = await GnosisSafe.at(proxy.address)
        await gnosisSafe.setup([lw.accounts[0], lw.accounts[1], accounts[1]], 1, ADDRESS_0, "0x", ADDRESS_0, ADDRESS_0, 0, ADDRESS_0, { from: accounts[0] })
    })

    let execTransaction = async function(to, value, data, operation, message) {
        let nonce = await gnosisSafe.nonce()
        let transactionHash = await gnosisSafe.getTransactionHash(to, value, data, operation, 0, 0, 0, ADDRESS_0, ADDRESS_0, nonce)
        let sigs = utils.signTransaction(lw, [lw.accounts[0], lw.accounts[1]], transactionHash)
        utils.logGasUsage(
            'execTransaction ' + message,
            await gnosisSafe.execTransaction(to, value, data, operation, 0, 0, 0, ADDRESS_0, ADDRESS_0, sigs, { from: accounts[0] })
        )
    }

    let execsTransaction = async function(to, value, data, operation, message) {
        let nonce = await gnosisSafe.nonce()
        let transactionHash = await gnosisSafe.getTransactionHash(to, value, data, operation, 0, 0, 0, ADDRESS_0, ADDRESS_0, nonce)
        let sigs = utils.signTransaction(lw, [lw.accounts[2], lw.accounts[3]], transactionHash)
        utils.logGasUsage(
            'execTransaction ' + message,
            await gnosisSafe.execTransaction(to, value, data, operation, 0, 0, 0, ADDRESS_0, ADDRESS_0, sigs, { from: accounts[0] })
        )
    }
    

    it('Add delegates and remove first delegate', async () => {
        enableModuleData = await gnosisSafe.contract.methods.enableModule(recoveryModule.address).encodeABI()
        await execTransaction(gnosisSafe.address, 0, enableModuleData, CALL, "enable module")
        let modules = await gnosisSafe.getModules()
        assert.equal(1, modules.length)
        assert.equal(recoveryModule.address, modules[0])

        await gnosisSafe.send( web3.utils.toWei('3', 'ether'), {from: accounts[0]})

        console.log(await web3.eth.getBalance(gnosisSafe.address))

        await execTransaction(lw.accounts[0], web3.utils.toWei('0.111', 'ether'), '0x', CALL, "add guardian 1")

        console.log(await web3.eth.getBalance(gnosisSafe.address))

        // Add guardian
        let addGuardian = await recoveryModule.contract.methods.addGuardianWithThreshold(gnosisSafe.address, accounts[0], 1).encodeABI()
        await execTransaction(recoveryModule.address, 0, addGuardian, CALL, "add guardian 1")

        // recoveryModule

        let guardianCount = await recoveryModule.guardiansCount(gnosisSafe.address)
        assert.equal(1, parseInt(guardianCount))

        
        await recoveryModule.confirmRecovery(gnosisSafe.address,  [lw.accounts[2], lw.accounts[3]], 1, true, { from: accounts[0] })
        

        let recoveryRequest = await recoveryModule.getRecoveryRequest(gnosisSafe.address)
         assert.equal(1, parseInt(recoveryRequest.guardiansApprovalCount))

         console.log(await gnosisSafe.getOwners())
         await recoveryModule.finalizeRecovery(gnosisSafe.address)

         console.log(accounts[2])

         console.log(await gnosisSafe.getOwners())

         console.log(await execsTransaction(lw.accounts[0], web3.utils.toWei('0.111', 'ether'), '0x', CALL, "add guardian 1"))

         console.log(await web3.eth.getBalance(gnosisSafe.address))
    })

})