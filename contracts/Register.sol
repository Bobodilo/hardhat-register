// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Register {
    /* State variables */
    string private s_info;
    address[] private s_storedAddresses;
    mapping(address => string) s_AddressToInfo;

    // Functions
    function setInfo(string memory info) public {
        s_info = info;
        s_storedAddresses.push(msg.sender);
        s_AddressToInfo[msg.sender] = info;
    }

    function getInformer(uint256 addressIndex) public view returns (address) {
        return s_storedAddresses[addressIndex];
    }

    function getAddressToInfo(address informer) public view returns (string memory) {
        return s_AddressToInfo[informer];
    }
}
