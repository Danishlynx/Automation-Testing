const { ethers } = require("hardhat");

async function main() {
  const MyProxyAdmin = await ethers.getContractFactory("ProxyAdmin");
  const MyTransparentUpgradeableProxy = await ethers.getContractFactory("MyTransparentUpgradeableProxy");
  const implementationAddress = "0x978eCCBF2Aaa29DFd274252C8B4Cc62F28dA5FCC"; // replace with your deployed implementation contract address

  // Deploy the proxy admin contract
  const proxyAdmin = await MyProxyAdmin.deploy();
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  // Deploy the transparent upgradeable proxy contract
  const proxy = await MyTransparentUpgradeableProxy.deploy(
    implementationAddress,
    proxyAdmin.address,
    "0x"
  );
  await proxy.deployed();
  console.log("TransparentUpgradeableProxy deployed to:", proxy.address);

  // Set the admin of the proxy contract to the proxy admin contract
  await proxyAdmin.setProxyAdmin(proxy.address);
  console.log("ProxyAdmin set as admin of TransparentUpgradeableProxy");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
