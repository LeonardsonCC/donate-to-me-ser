import type { NextPage } from "next";
import ConnectWallet from "../components/ConnectWallet";
import { donatorAbi } from "../abis";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useWeb3 from "../hooks/useWeb3";

const contractAddress = "0xE6ab19513E0b6242526A0cCF05D027B3940B3C52";

const Home: NextPage = () => {
  const { active, account } = useWeb3React();
  const web3 = useWeb3();

  const [error, setError] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (account) {
      web3.eth.getBalance(account).then((newBalance) => {
        setBalance(web3.utils.fromWei(newBalance, "ether"));
      });
    }
  }, [web3, account]);

  const donate = async () => {
    // @ts-ignore
    const DonatorContract = new web3.eth.Contract(donatorAbi, contractAddress);

    if (account) {
      const gas = await DonatorContract.methods.donate().estimateGas();
      try {
        await DonatorContract.methods.donate().send({
          value: web3.utils.toWei("5", "ether"),
          from: account,
          gas,
        });
      } catch (err) {
        setError(
          "Something wrong ocurred during transaction... Please try again!"
        );
      }
      const newBalance = await web3.eth.getBalance(account);
      setBalance(web3.utils.fromWei(newBalance, "ether"));
    }
  };

  return (
    <div className="w-scree h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">
        Hello my friend, do you want to buy me some coffee?
      </h1>
      <ConnectWallet>
        <div className="mt-3">
          <button
            className="px-5 py-2 bg-blue-500 rounded-lg text-white w-full"
            onClick={donate}
          >
            Donate
          </button>
          <span className="text-lg mt-4">
            Current balance: {Number(balance).toFixed(2)} FTM
          </span>
        </div>
      </ConnectWallet>
      {error ? (
        <div className="bg-red-500 rounded-lg p-5 mt-5">
          <p className="text-white">{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
