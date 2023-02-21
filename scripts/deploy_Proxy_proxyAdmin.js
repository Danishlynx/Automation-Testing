const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0x11e5f6854b08c3234973d9e17Ae76E9C75376778"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy(originalAddress, proxyAdmin.address);
  await proxy.deployed();

  console.log("Proxy deployed to:", proxy.address);
}

main();
