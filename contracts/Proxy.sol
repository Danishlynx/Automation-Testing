// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

abstract contract Proxy is Initializable {
    function implementation() public view virtual returns (address);
    function upgradeTo(address _impl) public virtual;
    function upgradeToAndCall(address _impl, bytes memory _data) public payable virtual;
    
    fallback() external payable {
        revert("Fallback function not implemented.");
    }
    
    receive() external payable {
        revert("Receive function not implemented.");
    }
}
