const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x1CaF216c1C7C62F60dE3d60A5f9B69fAcdf76842";

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
