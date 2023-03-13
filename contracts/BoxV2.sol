
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Box.sol";

contract BoxV2 is Box{
    // Increment the stored value by 1
    function increment() public{
        store(retrieve()+1);
    }
}
    