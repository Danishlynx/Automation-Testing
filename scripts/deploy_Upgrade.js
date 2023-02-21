const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x48cf3aFC4Fb98Dbd57f33602b655E4A37C7D1c91";

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
