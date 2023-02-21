const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xD0fA67a87E73Be62D27C0A48554c7b05bc765400";

async function main() {
  const Upgrade = await ethers.getContractFactory("Upgrade");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, Upgrade);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
