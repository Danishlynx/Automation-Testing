require("@nomicfoundation/hardhat-toolbox");

const Volta_PRIVATE_KEY = "1360ed6b3f0b509ccc3961e2c09caccd2a9b9422101938fb238ad5326323b11a";
const ALCHEMY_API_KEY = "4oh8YPsDTCF0e06AkXP_u7Fdh8-0QcIJ";
const GOERLI_PRIVATE_KEY = "1360ed6b3f0b509ccc3961e2c09caccd2a9b9422101938fb238ad5326323b11a";

module.exports = {
  solidity: "0.8.9",
  networks: {
    Volta: {
      url: "https://volta-rpc.energyweb.org",
      chainId: 73799,
      accounts: [Volta_PRIVATE_KEY]
    }
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
    
  }
};
