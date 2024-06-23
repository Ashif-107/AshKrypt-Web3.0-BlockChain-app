import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  let provider;
  try {
    if (typeof window.ethereum !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
      console.log({
        provider,
        signer,
        transactionContract
      });
    } else {
      console.error("Ethereum object not found, install MetaMask.");
      return null;
    }
  } catch (error) {
    console.error("Error initializing Web3Provider:", error);
  } 
}




export const TransactionProvider = ({ children }) => {

  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ addressto: "", amount: "", keyword: "", message: "" });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const checkIfWalletisConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);


      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }



  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const { addressto, amount, keyword, message } = formData;

      getEthereumContract();

    } catch (error) {
      console.log(error)
    }
  }




  useEffect(() => {
    checkIfWalletisConnected()
  }, [])

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

