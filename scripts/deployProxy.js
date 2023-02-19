const { ethers, upgrades } = require("hardhat");

async function main() {
  const Original = await ethers.getContractFactory("Original");
  const proxy = await upgrades.deployProxy(BoxV1, [12, 12]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();
