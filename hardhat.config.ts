import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY as string],
    },

    'ethereum-goerli': {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.WALLET_KEY as string],
    },

    'gnosis': {
      url: `https://rpc.gnosischain.com`,
      accounts: [process.env.WALLET_KEY as string],
    },
    // for local dev environment
    'local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY_LOCAL as string],
    },
  },
  defaultNetwork: 'hardhat',
};

export default config;