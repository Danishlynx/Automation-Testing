const { ethers } = require("hardhat");

async function main() {
  const ProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const proxyAdmin = await ProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  const Original = await ethers.getContractFactory("Original");
  const originalAddress = "0x48cf3aFC4Fb98Dbd57f33602b655E4A37C7D1c91"; // replace with your deployed Original contract address

  const Proxy = await ethers.getContractAt("Proxy", originalAddress);
  await Proxy.connect(proxyAdmin.address);
  console.log("Proxy connected to ProxyAdmin:", Proxy.address);
}

main();
