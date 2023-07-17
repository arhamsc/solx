require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "infura_testnet",
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    infura_testnet: {
      url: process.env.INFURA_URL,
      ethNetwork: "goerli",
      // chainId: 280,
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
    ganache: {
      url: "http://localhost:7545",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      // chainId: "1337",
    },
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",

    settings: {
      // defaultNetwork: ''
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
