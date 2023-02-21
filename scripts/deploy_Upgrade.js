const { ethers } = require("hardhat");

async function main() {
  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgraded = await Upgrade.deploy();
  console.log("Upgraded contract deployed to:", upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
