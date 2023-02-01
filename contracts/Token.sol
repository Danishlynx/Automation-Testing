pragma solidity ^0.8.0;

contract HelloWorld {
  string public message;

  constructor() public {
    message = "Hello World!";
  }

  function updateMessage(string memory newMessage) public {
    message = newMessage;
  }
}
