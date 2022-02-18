require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Nudvv-E-klRkKCu8M0D__zw8kDjV9iOa',
      accounts: [
        '03ab934d1821fe3df59bb706bba50347fb38a94c8f2c3471698f401e3898bed7',
      ],
    },
  },
};
