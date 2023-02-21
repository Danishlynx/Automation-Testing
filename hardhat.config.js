/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();


const deployKey = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.17",
  networks: {
    volta: {
      url: "https://volta-rpc.energyweb.org",
      accounts: [deployKey],
      chainId: 73799
    },
    ewc: {
      url: "https://rpc.energyweb.org",
      chainId: 246,
      accounts: [deployKey]
    }
  }
};