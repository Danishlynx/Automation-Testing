const { ethers } = require("hardhat");

async function main() {
  const originalAddress = "0xa58187D5B92D07F53e0de434fA4c6Cd287bE084D"; // Set the address of the already deployed Original contract
  const [deployer] = await ethers.getSigners();
  console.log("Deploying ProxyAdmin with the account:", deployer.address);

  const ProxyAdmin = await ethers.getContractFactory("contracts/proxy/ProxyAdmin.sol:ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();

  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  console.log("Deploying TransparentUpgradeableProxy with the account:", deployer.address);

  const TransparentUpgradeableProxy = await ethers.getContractFactory("contracts/proxy/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy");
  const proxy = await TransparentUpgradeableProxy.deploy(originalAddress, proxyAdmin.address, "0x");
  await proxy.deployed();

  console.log("TransparentUpgradeableProxy deployed to:", proxy.address);

  console.log("Setting the admin of the Proxy to the ProxyAdmin with the account:", deployer.address);

  await proxyAdmin.setProxyAdmin(proxy.address, { from: deployer.address });
  console.log("Proxy admin set as the admin of the proxy");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
