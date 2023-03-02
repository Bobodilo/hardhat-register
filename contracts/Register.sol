// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/**
 * @title A contract for Registering information
 * @author The Dude
 * @notice This contract is to demo a sample register contract
 * @dev This implements strings and arrays
 */

contract Register {
    /* State variables */
    string private s_info;
    address[] private s_storedAddresses;

    // Functions

    function setInfo(string memory info) public {
        s_info = info;
        s_storedAddresses.push(msg.sender);
    }

    function getInformer(uint256 addressIndex) public view returns (address) {
        return s_storedAddresses[addressIndex];
    }

    function getInfo() public view returns (string memory) {
        return s_info;
    }
}
