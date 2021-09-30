//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

/// @title Donations collecting contract
contract Donator {

    uint public totalDonations;
    uint public countDonations;
    address payable owner;

    constructor() {
        owner = payable(msg.sender); // setting the contract creator
    }
    
    //public function to make donate
    function donate() public payable {
        (bool success,) = owner.call{value: msg.value}(""); // msg.value has the donation value
        require(success, "Failed to send money to me :(");
        totalDonations += msg.value;
        countDonations += 1;
    }
    
    function getTotalDonations() view public returns(uint) {
        return totalDonations;
    }
    
    function getCountDonations() view public returns(uint) {
        return countDonations;
    }
}