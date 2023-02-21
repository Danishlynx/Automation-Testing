// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Proxy is Initializable {
  function initialize(address _logic, bytes memory _data) public payable initializer {
    _init(_logic, _data);
  }
}
