const { ethers } = require("hardhat");
const { TransparentUpgradeableProxy } = require('@openzeppelin/contracts-upgradeable/proxy/transparent/TransparentUpgradeableProxy');
const { TransparentUpgradeableProxyAdmin } = require('@openzeppelin/contracts-upgradeable/proxy/transparent/TransparentUpgradeableProxyAdmin');

async function main() {
  const proxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const adminInstance = await proxyAdmin.deploy();
  await adminInstance.deployed();
  console.log("ProxyAdmin deployed to:", adminInstance.address);

  const originalAddress = "0x8BDA3Aee6f7835dac51ec28F672cbD718EBB5A0F"; // replace with your deployed Original contract address

  const proxy = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const proxyInstance = await proxy.deploy(
    originalAddress,
    adminInstance.address,
    "0x"
  );
  await proxyInstance.deployed();
  console.log("Proxy deployed to:", proxyInstance.address);

  const setProxyAdminTx = await adminInstance.setProxyAdmin(
    proxyInstance.address,
    adminInstance.address
  );
  await setProxyAdminTx.wait();
  console.log("ProxyAdmin is now the admin of the Proxy");

  // test calling original function from proxy
  await proxyInstance.testFunction();
}

main();
