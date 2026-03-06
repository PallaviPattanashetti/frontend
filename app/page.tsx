import Image from "next/image";
import { Inria_Serif } from 'next/font/google';
const inriaSerif = Inria_Serif({ 
  subsets: ["latin"], 
  weight: "400" 
});

import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      
      style={{ backgroundImage: "url('./assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-120 min-h-26  bg-[#5F4F4F]/50 rounded-2xl flex items-center justify-center">
        <h1 className="text-[40px] md:text-[64px] font-extrabold text-black tracking-tight">
          TimeBank
        </h1>
      </div>

      <h2
        className={`${inriaSerif.className} text-[32px] md:text-[64px] text-center max-w-149 leading-tight mt-60 text-black`}
      >
        Exchange time for time: one hour given, one hour gained purely on
        credits, no cash!
      </h2>

      <button className="w-full max-w-100 h-20 rounded-[20px]  bg-[#5F4F4F]/26 border-2 border-black flex items-center justify-center text-[40px] font-bold text-black hover:opacity-90 transition-opacity mt-20">
        Get Started
      </button>
      
    </div>
  );
};

export default page;
