const { ethers } = require("hardhat");

async function main() {
  const Original = await ethers.getContractFactory("Original");
  const original = await Original.deploy(12, 12);
  await original.deployed();

  console.log("Original deployed to:", original.address);
}

main();
