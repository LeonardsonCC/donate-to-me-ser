import Web3 from "web3";

let rpcUrl = "https://mainnet.infura.io/ocCdekUYwOyLn7h7OlJM";
let web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));

const contractabi = JSON.parse("abi.json"); // the ABI
const contractaddress = "0xb51adbdd256930bd6b4c613add6fcca31db49827"; // Address of contract
const myContract = new web3.eth.Contract(contractabi, contractaddress);

myContract.methods.getXY().call();
myContract.methods.setXY("bitsofcode").send();
