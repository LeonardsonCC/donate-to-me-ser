const hre = require("hardhat");

async function main() {
  const Donator = await hre.ethers.getContractFactory("Donator");
  const donator = await Donator.deploy();

  await donator.deployed();

  console.log("Donator deployed to:", donator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
