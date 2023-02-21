const { ethers } = require("hardhat");

async function main() {
  const Original = await ethers.getContractFactory("Original");
  const originalContract = await Original.deploy(12, 12);
  await originalContract.deployed();

  console.log("Original contract deployed to:", originalContract.address);
}

main();
