const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0x2388610B34414894f325a4B7ffEE05be9dd61248"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractAt("Proxy", originalAddress);
  await Proxy.connect(proxyAdmin.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
