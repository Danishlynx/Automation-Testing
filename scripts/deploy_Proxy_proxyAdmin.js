const { ethers } = require("hardhat");
const { upgrades } = require("@openzeppelin/contracts-upgradeable");
const { ProxyAdmin } = require("@openzeppelin/contracts-upgradeable/access/ProxyAdmin");
const { TransparentUpgradeableProxy } = require("@openzeppelin/contracts-upgradeable/proxy/transparent/TransparentUpgradeableProxy");

async function main() {
  const adminAddress = "0xf6f01C8A190062078383A4d527e4cf1D04a928c5"; // replace with your admin address
  const originalAddress = "0x8BDA3Aee6f7835dac51ec28F672cbD718EBB5A0F"; // replace with the address of your Original contract

  // Deploy admin contract
  const admin = await upgrades.deployProxy(ProxyAdmin, []);
  await admin.deployed();

  console.log("Admin deployed to:", admin.address);

  // Deploy transparent upgradeable proxy
  const MyProxy = await ethers.getContractFactory("MyProxy");
  const myProxy = await upgrades.deployProxy(MyProxy, [originalAddress], { initializer: "initialize" });
  await myProxy.deployed();

  console.log("Proxy deployed to:", myProxy.address);

  // Transfer ownership of proxy to admin
  await admin.transferProxyAdminOwnership(myProxy.address);

  console.log("Proxy ownership transferred to:", admin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
