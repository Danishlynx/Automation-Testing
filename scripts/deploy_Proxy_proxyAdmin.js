const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0xD0fA67a87E73Be62D27C0A48554c7b05bc765400"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractAt("Proxy", originalAddress);
  await Proxy.connect(proxyAdmin.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
