import Web3Modal from 'web3modal';
import Web3 from "web3";

let web3;
const web3Modal = new Web3Modal();

export const getweb3 = async ()=>{
    if (!web3) {
        const provider = await web3Modal.connect();
        web3 = new Web3(provider);
    }
    return web3;
}

export const getAccount = async ()=>{
    const web3 = await getweb3;
    const accounts = await web3.et.getAccount();
    return accounts[0];
}