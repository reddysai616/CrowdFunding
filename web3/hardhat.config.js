// require("@matterlabs/hardhat-zksync-solc");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   zksolc: {
//     version: "1.3.9",
//     compilerSource: "binary",
//     settings: {
//       optimizer: {
//         enabled: true,
//       },
//     },
//   },
//   networks: {


//     fuji_testnet: {
//       url: "https://avalanche-fuji.infura.io/v3/9c0ea514ddc040059a5426506c2f12ed",
//       // ethNetwork: "goerli",
//       // chainId: 280,
//       // zksync: true,
//       accounts:[`ab29675743def0dcf4e8ac4fc40e69ac6d2839b90507fe95c66112926577cddd`]
//     },
//     zksync_mainnet: {
//       url: "https://zksync2-mainnet.zksync.io/",
//       ethNetwork: "mainnet",
//       chainId: 324,
//       zksync: true,
//     },
//   },
//   paths: {
//     artifacts: "./artifacts-zk",
//     cache: "./cache-zk",
//     sources: "./contracts",
//     tests: "./test",
//   },
//   solidity: {
//     version: "0.8.17",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'AvalancheFujiTestnet',
    networks: {
      hardhat: {},
      AvalancheFujiTestnet: {
        url: 'https://avalanche-fuji.infura.io/v3/9c0ea514ddc040059a5426506c2f12ed',
        accounts: [`ab29675743def0dcf4e8ac4fc40e69ac6d2839b90507fe95c66112926577cddd`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};