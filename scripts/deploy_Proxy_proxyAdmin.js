const { ethers } = require("hardhat");

async function main() {
  const MyProxyAdmin = await ethers.getContractFactory("MyProxyAdmin");
  const MyTransparentUpgradeableProxy = await ethers.getContractFactory("MyTransparentUpgradeableProxy");

  // Deploy the implementation contract
  const implementation = "0xa58187D5B92D07F53e0de434fA4c6Cd287bE084D"; // Replace with the implementation contract address

  // Deploy the proxy admin contract
  const proxyAdmin = await MyProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  // Deploy the transparent upgradeable proxy contract
  const proxy = await MyTransparentUpgradeableProxy.deploy(
    implementation,
    proxyAdmin.address,
    "0x"
  );
  await proxy.deployed();
  console.log("TransparentUpgradeableProxy deployed to:", proxy.address);

  // Set the admin of the proxy contract to the proxy admin contract
  await proxyAdmin.setProxyAdmin(proxy.address);
  console.log("ProxyAdmin set as admin of TransparentUpgradeableProxy");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
