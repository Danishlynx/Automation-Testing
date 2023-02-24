const { ethers } = require("hardhat");
const { TransparentUpgradeableProxy } = require('@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol');
const { ProxyAdmin } = require('@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol');

async function main() {
  const originalContractAddress = "0x978eCCBF2Aaa29DFd274252C8B4Cc62F28dA5FCC"; // replace with your original contract address

  // Retrieve the already deployed original contract instance
  const OriginalContract = await ethers.getContractFactory("OriginalContract");
  const originalContract = await OriginalContract.attach(originalContractAddress);

  // Retrieve the signer account for deploying the proxy admin
  const [deployer] = await ethers.getSigners();

  // Deploy the proxy admin contract
  const proxyAdmin = await ethers.getContractFactory("ProxyAdmin").deploy({ from: deployer.address });
  await proxyAdmin.deployed();
  console.log("ProxyAdmin deployed to:", proxyAdmin.address);

  // Deploy the proxy contract
  const ProxyContract = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const proxy = await ProxyContract.deploy(originalContractAddress, proxyAdmin.address, "0x", { from: deployer.address });
  await proxy.deployed();
  console.log("Proxy deployed to:", proxy.address);

  // Connect the original contract to the proxy
  const data = originalContract.interface.encodeFunctionData("setProxy", [proxy.address]);
  await proxyAdmin.upgradeAndCall(originalContractAddress, proxy.address, data, { from: deployer.address });

  console.log("Proxy connected to original contract!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
