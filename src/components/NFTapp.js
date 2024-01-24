import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import MyNFTContract from './artifacts/contracts/MyNFTContract.sol/MyNFTContract.json';

const NFTApp = () => {
  const [contract, setContract] = useState(null);
  const [tokenIdCounter, setTokenIdCounter] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
        const signer = provider.getSigner();

        const contractAddress = '0xYourContractAddress';
        const myNFTContract = new ethers.Contract(contractAddress, MyNFTContract.abi, signer);

        setContract(myNFTContract);

        const tokenIdCounterValue = await myNFTContract.getTokenIdCounter();
        setTokenIdCounter(tokenIdCounterValue.toNumber());
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };

    initializeContract();
  }, []);

  const mintNFT = async () => {
    try {
      // Mint a new NFT
      const tx = await contract.mintNFT();

      // Wait for the transaction to be mined
      await tx.wait();

      // Update tokenIdCounter after minting
      const tokenIdCounterValue = await contract.getTokenIdCounter();
      setTokenIdCounter(tokenIdCounterValue.toNumber());

      console.log('NFT Minted successfully!');
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div>
      <h1>My NFT App</h1>
      <p>Token ID Counter: {tokenIdCounter}</p>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
};

export default NFTApp;
