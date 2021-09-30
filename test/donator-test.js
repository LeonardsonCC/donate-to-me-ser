const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Donator", function () {
  it("Should donate some money to me", async function () {
    const Donator = await ethers.getContractFactory("Donator");
    const donate = await Donator.deploy();
    await donate.deployed();

    expect(await donate.getCountDonations()).to.equal(0);
    expect(await donate.getTotalDonations()).to.equal(ethers.utils.parseEther("0"));

    const makeDonation = await donate.donate({ value: ethers.utils.parseEther("5") });

    // wait until the transaction is mined
    await makeDonation.wait();

    expect(await donate.getCountDonations()).to.equal(1);
    expect(await donate.getTotalDonations()).to.equal(ethers.utils.parseEther("5"));
  });
});
