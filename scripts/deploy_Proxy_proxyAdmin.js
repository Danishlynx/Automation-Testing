const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0xA7BADE0CdDA50844A11EE6E1E1d2F0886C9B1B70"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractAt("Proxy", originalAddress);
  await Proxy.connect(proxyAdmin.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
