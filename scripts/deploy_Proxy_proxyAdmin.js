const hre = require("hardhat");

async function main() {
  // Deploy ProxyAdmin contract
  const proxyAdminFactory = await hre.ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await proxyAdminFactory.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  // Set up the TransparentUpgradeableProxy contract deployment
  const originalAddress = "0xa58187D5B92D07F53e0de434fA4c6Cd287bE084D"; // Replace with the address of the deployed Original contract
  const proxyFactory = await hre.ethers.getContractFactory("Proxy");
  const initData = "";
  const proxy = await proxyFactory.deploy(originalAddress, proxyAdmin.address, initData);
  await proxy.deployed();
  console.log("Proxy deployed to:", proxy.address);

  // Set the ProxyAdmin contract as the admin of the proxy
  await hre.ethers.getContractAt("Proxy", proxy.address)
    .then((proxyContract) => proxyContract.changeAdmin(proxyAdmin.address));
  console.log("Proxy admin set to:", proxyAdmin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
