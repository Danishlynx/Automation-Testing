// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/ProxyAdmin.sol";


contract MyProxyAdmin is ProxyAdmin, Initializable {}
