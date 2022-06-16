const hre = require("hardhat");

async function main() {
  const Shapeshifters = await hre.ethers.getContractFactory("Shapeshifters");
  const shapeshifters = await Shapeshifters.deploy();

  await shapeshifters.deployed();

  const Goo = await hre.ethers.getContractFactory("Goo");
  const goo = await Goo.deploy(shapeshifters.address);

  await goo.deployed();
  
  console.log("Shapeshifters deployed to:", shapeshifters.address);
  console.log("Goo deployed to:", goo.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });