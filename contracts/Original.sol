// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Original is Initializable {
  // these state variables and their values
  // will be preserved forever, regardless of upgrading
  uint public width;
  uint public length;

  constructor(uint _length, uint _width) {
    length = _length;
    width = _width;
  }
  
  function area() public view returns(uint) {
    return length * width;
  }
}
