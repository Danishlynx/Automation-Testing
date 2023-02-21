// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967Proxy.sol";

contract Proxy is Initializable, ERC1967Proxy {
  function initialize(address _logic, bytes memory _data) public payable initializer {
    __ERC1967Proxy_init(_logic, _data);
  }
}
