import axios from "axios";
import React, { useState } from "react";

function Home() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result,setResult] =useState()

  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
  };

  const handleGenerateSteps = async (firstNumber, secondNumber, e) => {
    try {
      e.preventDefault();
      if (firstNumber === "" || secondNumber === "") {
        console.log("enter 2 numbers");
      } else if (/^-\d+/.test(firstNumber) || /^-\d+/.test(secondNumber)) {
        console.log("enter postive numbers only");
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/v1/response/addition",
          {
            numberOne: firstNumber,
            numberTwo: secondNumber,
          }
        );
        setResult(res.data.result);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="grid  ">
      <div className="h-[60px] bg-slate-200 flex ">
        <p className="font-bold ml-[100px] mt-2 text-[28px]">Step Addition</p>
      </div>
      <div className="bg-white h-screen">
        {/* input */}
        <div className="ml-[400px] mt-[20px]">
          <div className="flex">
            <p className="font-semibold">First Number:</p>
            <input
              type="number"
              className="bg-slate-100 rounded-md pr-2 outline-none w-1/2 ml-[50px] text-right"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              placeholder="Enter a number    "
            ></input>
          </div>
          <div className="flex mt-5">
            <p className="font-semibold ">Second Number:</p>
            <input
              type="number"
              className="bg-slate-100 pr-2 outline-none rounded-md w-1/2 ml-[27px] text-right  "
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              placeholder="Enter a number     "
            ></input>
          </div>
          <div className="my-5 ">
            <button
              onClick={handleClear}
              className="border-2 border-dotted border-red-400 px-2  rounded-md font-semibold ml-[55px] hover:bg-red-200 hover:scale-105 transition duration-200 "
            >
              Clear
            </button>
            <button
              onClick={(e) => handleGenerateSteps(firstNumber, secondNumber, e)}
              className="border-2 border-slate-400 px-5 py-1 rounded-md font-semibold ml-[440px] hover:bg-emerald-200 hover:scale-105 transition duration-300 "
            >
              Generate Steps
            </button>
          </div>
        </div>
        {/* response */}

        <div className="border-2 border-dotted flex border-transparent rounded-sm mx-[400px] h-fit mt-1 bg-slate-200">
          <div className="bg-black/80 h-[400px] my-6 overflow-y-auto scrollbar-y-auto rounded-sm mx-3">
            
            <p className="text-[27px] m-10 text-white">{JSON.stringify(result, null, 2)}</p>
            
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
