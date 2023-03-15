require("@nomicfoundation/hardhat-toolbox");


require('@openzeppelin/hardhat-upgrades');




//require('dotenv').config(); 
const deployKey = "b7059a1f8aacf38cba35a2075d6df5b52c5f08786c69d80ae307466a7e9f1cbc";

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "fTj-d_vmXZ_YFh9JfH1ZCrBmd_kH--Vq";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "e51acde034d4294589ec534d0c223a1d87e5a50857658e0194364a6b5d746f29";


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    volta: {
      url: "https://volta-rpc.energyweb.org",
      accounts: [deployKey],
      chainId: 73799
    },
    ewc: {
      url: "https://rpc.energyweb.org",
      chainId: 246,
      accounts: [deployKey]
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    gasReporter: {
      currency: 'USD',
      gasPrice: 21,
      enabled: false,
      coinmarketcap: process.env.COIN_MARKET_CAP_API,
      token: "EWT",
      enabled: process.env.GAS_REPORTING == "activate" ?  true : false
    },
   
      
    }
  };