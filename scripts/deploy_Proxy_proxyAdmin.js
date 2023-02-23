const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgrade = await Upgrade.deploy();
  await upgrade.deployed();
  console.log("Upgrade deployed to:", upgrade.address);

  const Proxy = await ethers.getContractFactory("Proxy");
  const initData = upgrade.interface.encodeFunctionData("initialize");
  const proxy = await upgrades.deployProxy(Proxy, upgrade.address, initData, { initializer: 'initialize' });
  await proxy.deployed();
  console.log("Proxy deployed to:", proxy.address);

  await proxyAdmin.setProxyAdmin(proxy.address, proxyAdmin.address);
  console.log("ProxyAdmin set as admin of Proxy.");
}

main();
