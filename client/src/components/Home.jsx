import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from './Loader'

import {TransactionContext} from '../context/TransactionContext'

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] sm:border-[1px] flex justify-center items-center border-[0.5px] border-black text-sm font-semilight text-black";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-xl p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Home = () => {

  const {connectWallet, currentAccount, formData, sendTransaction, handleChange} = useContext(TransactionContext);

 
  const handleSubmit = () => {
    const { addressto, amount, keyword, message } = formData;

    e.preventDefault();

    if(!addressto || !amount || !keyword|| !message) return;

    sendTransaction();

  }

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between md:p-20 py-12 px-4 w-full">
        <div className="flex flex-1 justify-start flex-col md:mr-10 ">
          <h1 className="text-4xl sm:text-6xl text-white text-gradient py-1">
            The No.1 in<br /> Crypto world
          </h1>
          <p className="text-left mt-5 text-black font-semilight md:w-9/12 w-11/12 text-2xl">
            Buy and sell cryptocurrencies easily and securely on AshKrypt .
          </p>
         {!currentAccount && (<button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#F5B7B1] p-3 rounded-full cursor-pointer hover:bg-[#F1948A] transition ease-linear w-[200px]">
              <p className="text-black text-base font-semibold">Connect Wallet</p>
          </button>)}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        
        </div>

        <div className="flex flex-col flex-1 items-center justify-start md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full mb-10 eth-card ">
            <div className="flex justify-between flex-col h-full w-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex  items-center justify-center">
                      <SiEthereum fontSize={21} color="#000000" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#000000" />
                </div>
                <div>
                <p className="text-grey font-semilight text-sm">
                  Address
                </p>
                <p className="text-grey font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input placeholder="Adress To" name="adressto" type="text" handleChange={handleChange}/>
                <Input placeholder="Amount (ETH) " name="amount" type="number" handleChange={handleChange}/>
                <Input placeholder="KeyWord (GIF)" name="keyword" type="text" handleChange={handleChange}/>
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>
                <div className="h-[1px] w-full bg-black my-2"/>
                {false ? (
                  <Loader />
                ):(
                  <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer transition ease-linear"
                >
                  Send now
                </button>
                )}
            </div>

        </div>
      </div>
    </div>

  )
}

export default Home