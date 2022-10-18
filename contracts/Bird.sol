// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Animal.sol";

contract Bird is Animal {
    constructor(){}

    function eatWorm() public {
        Animal.feedFood();
    }

    function eatWater() public {
        Animal.feedWater();
    }
   
    function fly() public {
        Animal.burnEnergy(2);
    }

    function crow() public {
        Animal.burnEnergy(1);
    }

    function displayBirdEnergy () public view returns (int8){
        return int8(Animal.displayEnergy());
    }
    
}