// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Proxy is Initializable {
  address private _logic;

  function initialize(address logic) public initializer {
    _logic = logic;
  }

  fallback() external payable {
    assembly {
      let ptr := mload(0x40)
      calldatacopy(ptr, 0, calldatasize())
      let result := delegatecall(gas(), _logic, ptr, calldatasize(), 0, 0)
      let size := returndatasize()
      returndatacopy(ptr, 0, size)
      switch result
      case 0 {revert(ptr, size)}
      default {return(ptr, size)}
    }
  }

  receive() external payable {}

  function getLogic() public view returns (address) {
    return _logic;
  }
}
