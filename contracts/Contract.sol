// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

/// @title A Smart Contract
/// @author Rafael Romero
contract Contract {
    function greet() external pure returns (string memory greeting) {
        greeting = "Hello, World!";
    }
}