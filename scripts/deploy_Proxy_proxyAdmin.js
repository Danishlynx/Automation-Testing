const { ethers, upgrades } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Proxy = await ethers.getContractFactory("Proxy");
  const originalAddress = "0xa58187D5B92D07F53e0de434fA4c6Cd287bE084D"; // replace with your deployed Original contract address
  const proxy = await upgrades.deployProxy(Proxy, originalAddress, { initializer: 'initialize' });
  await proxy.deployed();
  console.log("Proxy deployed to:", proxy.address);

  await proxyAdmin.setProxyAdmin(proxy.address, proxyAdmin.address);
  console.log("ProxyAdmin set as admin of Proxy.");
}

main();
