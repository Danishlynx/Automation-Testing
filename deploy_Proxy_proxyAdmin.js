const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
      const boxAddress = "0x910A363fe7576b3D852251eA607E529C726aF1b8"; // replace with the address of your Box contract
      const Box = await ethers.getContractFactory("Box");
      const box = await Box.attach(boxAddress);
    
      console.log("Deploying Box proxy...");
      const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: "store" });
      console.log("Box proxy deployed at:", boxProxy.address);

      // Retrieve the ProxyAdmin contract address
      const adminAddress = await upgrades.admin.getInstance();
      console.log("ProxyAdmin deployed at:", adminAddress.address);


    }
    
    main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
    