const { ethers, upgrades } = require("hardhat");

async function main() {
  const Original = await ethers.getContractFactory("Original");
  const proxy = await upgrades.deployProxy(Original, [12, 12]);
  await proxy.deployed();

  console.log(proxy.address);
}

main();
