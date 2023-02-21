const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x6a2Ea8c135c964e93E27B2750584569Ed18BC37D";

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
