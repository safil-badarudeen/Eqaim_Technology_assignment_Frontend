import React from 'react'

function Home() {


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
               <input type="number" className="bg-slate-100 rounded-md pr-2 outline-none w-1/2 ml-[50px] text-right" placeholder="Enter a number    "></input>
                </div> 
                <div className="flex mt-5">
               <p className="font-semibold ">Second Number:</p>
               <input type="number" className="bg-slate-100 pr-2 outline-none rounded-md w-1/2 ml-[27px] text-right  " placeholder="Enter a number     "></input>
                </div> 
                <div className="my-5 ">
                <button className="border-2 border-dotted border-red-400 px-2  rounded-md font-semibold ml-[55px] hover:bg-red-200 hover:scale-105 transition duration-200 ">Clear</button>
                    <button className="border-2 border-slate-400 px-5 py-1 rounded-md font-semibold ml-[440px] hover:bg-emerald-200 hover:scale-105 transition duration-300 ">Generate Steps</button>
                </div>
            </div>
            {/* response */}


            <div className="border-2 border-dotted border-transparent rounded-sm mx-[400px] h-fit mt-1 bg-slate-200">
               <div className="bg-black/80 h-[400px] my-6 rounded-sm mx-3">
                 
                </div> 
            </div>
        </div>
     
    </div>
  )
}

export default Home