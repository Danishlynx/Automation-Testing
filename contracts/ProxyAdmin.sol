// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract ProxyAdmin is Initializable, OwnableUpgradeable {
  function initialize(address initialOwner) public initializer {
    __Ownable_init();
    transferOwnership(initialOwner);
  }
}
