"use client";
import React from "react";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import Link from "next/link";
import { Button } from "flowbite-react/components/Button";

const MapPage = () => {
 
  const customInputContainer =
    "w-full max-w-[505px] min-h-[50px] md:h-[63px] border-2 border-black rounded-[15px] bg-white flex items-center px-5 transition-all shadow-sm";

  const inputStyle =
    "w-full h-full bg-transparent border-none outline-none focus:ring-0 text-black placeholder-black/50 text-sm md:text-base";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-8"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
  
      <div className="w-full max-w-99 min-h-20 md:min-h-24.75 bg-[#5F4F4F]/60 rounded-2xl flex items-center justify-center my-6 md:my-10 px-4 border border-black/10">
        <h1 className="text-[28px] md:text-[64px] font-extrabold text-black tracking-tight text-center leading-tight">
          Welcome
        </h1>
      </div>

<div className="max-w-2xl text-center mt-8 md:mt-12">
        <p className="text-xl md:text-[36px] text-black font-bold italic leading-tight">
         "Wherever you are, you have something to give."
        </p>
      </div>
    </div>
  );
};

export default MapPage;
