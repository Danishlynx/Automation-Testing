const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdminAddress = "0x1CaF216c1C7C62F60dE3d60A5f9B69fAcdf76842"
 

  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgradeAddress = "0x8a7bA58fd0C2b01E860A98009bB3452617495F67"; // replace with your deployed Upgrade contract address

  const Proxy = await ethers.getContractAt("Proxy", upgradeAddress);
  await Proxy.connect(proxyAdminAddress.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
