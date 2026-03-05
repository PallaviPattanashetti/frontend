import Image from "next/image";
import { Jersey_10 } from "next/font/google";
const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });

import React from "react";

const page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('./assets/welcome.png')" }}
    >
      <div className="w-full max-w-273 min-h-26 border-4 border-black bg-[#32C2CA] rounded-2xl flex items-center justify-center">
        <h1 className="text-[40px] md:text-[64px] font-extrabold text-black tracking-tight">
          TimeBank
        </h1>
      </div>

      <h2
        className={`${jersey.className} text-[32px] md:text-[64px] text-center max-w-149 leading-tight mt-60 text-black`}
      >
        Exchange time for time: one hour given, one hour gained purely on
        credits, no cash!
      </h2>

      <button className="w-full max-w-198.75 h-29.25 rounded-[45px] bg-[#32C2CA] border-4 border-black flex items-center justify-center text-[40px] font-bold text-black hover:opacity-90 transition-opacity mt-20">
        Get Started
      </button>
    </div>
  );
};

export default page;
