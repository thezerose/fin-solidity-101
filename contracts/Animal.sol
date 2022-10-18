// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Animal {
    int8 private energy;

    constructor() {
        energy = 0;
    }
 
    function feedFood () internal{
        energy = energy + 5;
    }

    function feedWater () internal {
        energy = energy + 1;
    }

    function burnEnergy (int8 _burnEnergy) internal {
        require((energy - _burnEnergy) > 0, "Low energy: cannot do activity");
        energy = energy - _burnEnergy;
    }

    function displayEnergy () internal view returns (int8){
        return energy;
    }
    
}