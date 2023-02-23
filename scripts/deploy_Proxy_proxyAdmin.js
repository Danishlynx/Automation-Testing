const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploy the ProxyAdmin contract
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  // Get the Original contract instance
  const originalAddress = "0xa58187D5B92D07F53e0de434fA4c6Cd287bE084D"; // replace with your deployed Original contract address
  const Original = await ethers.getContractAt("Original", originalAddress);

  // Deploy the Proxy contract and point it to the Original contract
  const Proxy = await ethers.getContractFactory("Proxy");
  const initData = Original.interface.encodeFunctionData("initialize");
  const proxy = await upgrades.deployProxy(Proxy, originalAddress, initData, { initializer: 'initialize' });
  await proxy.deployed();
  console.log("Proxy deployed to:", proxy.address);

  // Set the ProxyAdmin contract as the admin for the Proxy contract
  await proxyAdmin.setProxyAdmin(proxy.address, proxyAdmin.address);
  console.log("ProxyAdmin set as admin of Proxy.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
