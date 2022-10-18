// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Animal.sol";

contract Dog is Animal {
    constructor(){}

    function eatDogFood() public {
        Animal.feedFood();
    }

    function eatWater() public {
        Animal.feedWater();
    }

    function run() public {
        Animal.burnEnergy(3);
    }

    function bark() public {
        Animal.burnEnergy(1);
    }

    function displayDogEnergy () public view returns (int8){
        return int8(Animal.displayEnergy());
    }
}