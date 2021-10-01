import type { NextPage } from "next";
import ConnectWallet from "../components/ConnectWallet";
import styles from "../styles/Home.module.css";
import { donatorAbi } from "../abis";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const web3 = new Web3(Web3.givenProvider);
const web3 = new Web3("http://localhost:8545");
// @ts-ignore
const DonatorContract = new web3.eth.Contract(donatorAbi, contractAddress);

const Home: NextPage = () => {
  const { active, account } = useWeb3React();

  const donate = async () => {
    console.log(account);
    const gas = await DonatorContract.methods.donate().estimateGas();
    const testAccount = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
    const result = await DonatorContract.methods.donate().send({
      value: 5,
      from: testAccount,
      gas,
    });
    console.log(result);
  };

  return (
    <div className={styles.container}>
      <p>Nice</p>
      <ConnectWallet />
      {active ? <button onClick={donate}>Donate</button> : null}
    </div>
  );
};

export default Home;
