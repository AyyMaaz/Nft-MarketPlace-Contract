import { HardhatUserConfig } from "hardhat/config";
import 'dotenv/config'
import "@nomicfoundation/hardhat-toolbox";
const privatekey=process.env.GOERLI_API_KEY as string;
const alchemy=process.env.ALCHEMY_API_KEY as string;


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:alchemy,
      accounts :[privatekey],
    },
  },
};

export default config;
