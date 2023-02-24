const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0x8BDA3Aee6f7835dac51ec28F672cbD718EBB5A0F"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractAt("Proxy", originalAddress);
  const proxy = await Proxy.deploy();
  await proxy.deployed();
  await Proxy.connect(proxyAdmin.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
