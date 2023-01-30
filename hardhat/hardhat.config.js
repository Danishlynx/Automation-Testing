require("@nomicfoundation/hardhat-toolbox");

const Volta_PRIVATE_KEY = "63726504fd875b6dae9c04e629cacd024da9190a522a92a3395b4a5df55833ee";

module.exports = {
  solidity: "0.8.9",
  networks: {
    Volta: {
      url: "https://volta-rpc.energyweb.org",
      chainId: 73799,
      accounts: [Volta_PRIVATE_KEY]
    }
  }
};

