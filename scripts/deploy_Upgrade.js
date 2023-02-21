const { ethers } = require("hardhat");

async function main() {
  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgrade = await Upgrade.deploy(12, 12);
  await upgrade.deployed();

  console.log("Upgrade deployed to:", upgrade.address);
}

main();
