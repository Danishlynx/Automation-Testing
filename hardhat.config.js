require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

require('@openzeppelin/hardhat-upgrades');


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    volta: {
      url: "https://volta-rpc.energyweb.org",
      chainId: 73799,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    ewc: {
      url: "https://rpc.energyweb.org",
      chainId: 246,
      accounts: [deployKey]
    }
   
      
    }
  };
