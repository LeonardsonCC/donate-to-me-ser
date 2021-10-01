import Web3 from "web3";

const PROVIDER = process.env.DEV ? "http://localhost:8545" : Web3.givenProvider;

const useWeb3 = () => {
  const web3 = new Web3(PROVIDER);
  return web3;
};

export default useWeb3;
