// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract Proxy is TransparentUpgradeableProxy {

    constructor(address _logic, address _admin, bytes memory _data) payable TransparentUpgradeableProxy(_logic, _admin, _data) {
    }
    
    function implementation() public view override returns (address) {
        return super.implementation();
    }
    
    fallback() virtual external payable {
        revert("Fallback function not implemented.");
    }
    
    receive() virtual external payable {
        revert("Receive function not implemented.");
    }
}
