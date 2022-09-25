import { ethers } from "hardhat";

async function main() {


  const NftMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await NftMarket.deploy();

  await nftMarket.deployed();
 // 0x765566EBD398e15108509cC8d3a58A7185F6d495

  console.log(` ${nftMarket.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
