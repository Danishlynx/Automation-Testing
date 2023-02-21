const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdminAddress = " 0x76aE3331ABeB92247127e246Ed7DCe79Bc0D3d67"
 

  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgradeAddress = "0xe0c82A5480f5Df0B87EE2A09bEA6dD923B09D527"; // replace with your deployed Upgrade contract address

  const Proxy = await ethers.getContractAt("Proxy", upgradeAddress);
  await Proxy.connect(proxyAdminAddress.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
