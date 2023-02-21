const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x0B3230753B182C8e1BeaC76ca8C9060a1f1e807e";

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
