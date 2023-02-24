// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract Proxy is ERC1967Proxy {

    constructor(address _logic, bytes memory _data) payable ERC1967Proxy(_logic, _data) {
    }
    
    function _upgradeTo(address newImplementation) internal override {
        super._upgradeTo(newImplementation);
    }

    function _authorizeUpgrade(address newImplementation) internal override {
        super._authorizeUpgrade(newImplementation);
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
