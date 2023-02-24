const { ethers } = require("hardhat");
const { ERC1967Proxy } = require("@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy");

async function main() {
  const proxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const adminInstance = await proxyAdmin.deploy();
  await adminInstance.deployed();
  console.log("ProxyAdmin deployed to:", adminInstance.address);

  const originalAddress = "0x8BDA3Aee6f7835dac51ec28F672cbD718EBB5A0F"; // replace with your deployed Original contract address

  const proxy = await ethers.getContractFactory("Proxy");
  const proxyInstance = await upgrades.deployProxy(
    ERC1967Proxy,
    originalAddress,
    "0x",
    { initializer: false }
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
