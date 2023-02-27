const { ethers } = require("hardhat");

async function main() {
  // Deploy Original contract
  const Original = await ethers.getContractFactory("Original");
  const original = await Original.deploy(42); // pass in any constructor arguments
  await original.deployed();

  console.log("Original deployed to:", original.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
