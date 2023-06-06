const utils = require('@gnosis.pm/safe-contracts/test/utils/general')

const truffleContract = require("@truffle/contract")



const SampleNFT = artifacts.require("./SampleNFT.sol")

contract('Sample NFT', function(accounts) {
    let lw

    beforeEach(async function() {
        // Create lightwallet
        lw = await utils.createLightwallet()

        // Create Master Copies
        sampleNFT = await SampleNFT.new('ZenGuardNFT', 'ZGD')
        
    })


    it('Mint an NFT', async () => {

        await sampleNFT.mint({ from: accounts[0] })
        const balance = await sampleNFT.balanceOf(accounts[0])
        
         assert.equal(1, parseInt(balance))


    })

})