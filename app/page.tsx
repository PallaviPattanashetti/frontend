"use client"; 

import Image from "next/image";
import { Inria_Serif } from 'next/font/google';
import { useRouter } from "next/navigation"; 
import React from "react";

const inriaSerif = Inria_Serif({ 
  subsets: ["latin"], 
  weight: "400" 
});

const Page = () => {
  const router = useRouter(); 

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-120 min-h-26 bg-[#CD9238]/40 rounded-2xl flex items-center justify-center">
        <h1 className="text-[40px] md:text-[64px] font-bold text-black tracking-tight">
          TimeBank
        </h1>
      </div>

      <h2
        className={`${inriaSerif.className} text-[32px] md:text-[64px] text-center max-w-149 leading-tight mt-40 text-black`}
      >
        Exchange time for time: one hour given, one hour gained purely on
        credits, no cash!
      </h2>

     
      <button 
        onClick={() => router.push("/Pages/AccountPage")} 
        className="w-full max-w-100 h-20 rounded-[20px] bg-[#5F4F4F]/26 border-2 border-black flex items-center justify-center text-[40px] font-bold text-black hover:bg-[#5F4F4F]/40 transition-all mt-20 active:scale-95"
      >
        Get Started
      </button>
      
    </div>
  );
};

export default Page;