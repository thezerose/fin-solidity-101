import { expect } from "chai";
import { ethers } from "hardhat";

describe("Bird contract", function () {
  it("Eat: Should display bird energy = 5", async function () {
    const Bird = await ethers.getContractFactory("Bird");
    const bird = await Bird.deploy();

    await bird.eatWorm();
    expect(await bird.displayBirdEnergy()).to.equal(5);
  });

  it("Eat and Fly: Should display bird energy = 3", async function () {
    const Bird = await ethers.getContractFactory("Bird");
    const bird = await Bird.deploy();

    await bird.eatWorm();
    await bird.fly();

    expect(await bird.displayBirdEnergy()).to.equal(3);
  });

  it("Should display dead message", async function () {
    const Bird = await ethers.getContractFactory("Bird");
    const bird = await Bird.deploy();

    await expect(bird.fly()).to.be.revertedWith("Low energy: cannot do activity");
  });
});
