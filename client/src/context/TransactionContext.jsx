import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;
export const getEthereumContract = () => {
    const provider = new ethers.providers. Web3Provider (ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers. Contract (contractAddress, contractABI, signer);
    console.log({
    provider,
    signer,
    transactionContract
    });
}




export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressto: "", keyword: "", amount: "", message:""});

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}))
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
        try{
            if(!ethereum) return alert("Please install MetaMask.");

            
        }catch(error){
            console.log(error)
        }
    }




    useEffect(()=>{
        checkIfWalletisConnected()
    },[])

  return (
    <TransactionContext.Provider value={{ connectWallet ,currentAccount,formData,setFormData, handleChange, sendTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}

