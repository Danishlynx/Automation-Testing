const { ethers } = require("hardhat");

async function main() {
  const Original = await ethers.getContractFactory("Original");
  const original = await Original.deploy();
  await original.deployed();

  // initialize the length and width values using 12 as the arguments
  await original.initialize(12, 12);

  console.log("Original deployed to:", original.address);
}

main();
