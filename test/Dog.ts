import { expect } from "chai";
import { ethers } from "hardhat";

describe("Dog contract", function () {
  // ...previous test...

  it("Eat: Should display dog energy = 5", async function () {
    const Dog = await ethers.getContractFactory("Dog");
    const dog = await Dog.deploy();

    await dog.eatDogFood();
    expect(await dog.displayDogEnergy()).to.equal(5);
  });

  it("Eat and Run: Should display dog energy = 2", async function () {
    const Dog = await ethers.getContractFactory("Dog");
    const dog = await Dog.deploy();

    await dog.eatDogFood();
    await dog.run();

    expect(await dog.displayDogEnergy()).to.equal(2);
  });

  it("Should display dead message", async function () {
    const Dog = await ethers.getContractFactory("Dog");
    const dog = await Dog.deploy();

    await expect(dog.run()).to.be.revertedWith("Low energy: cannot do activity");
  });
});
