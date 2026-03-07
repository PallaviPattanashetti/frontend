

"use client";
import { useState } from "react";
import { Card } from "flowbite-react";

export default function HelpSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTransfer = () => {
    setIsSuccess(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
     
      <div className="w-full max-w-112.5 min-h-17.5 bg-[#5F4F4F]/50 rounded-2xl flex items-center justify-center my-6 md:my-8 p-4">
        <h1 className="text-3xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Credits
        </h1>
      </div>

      <div className="w-full max-w-213 min-h-135 border-[6px] md:border-10 border-black bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center py-6 px-4 md:py-8 gap-4 shadow-2xl overflow-hidden rounded-lg relative">
        
        {!isSuccess ? (
          <div className="w-full max-w-154 flex flex-col gap-4">
          
            <div className="flex flex-col gap-1">
              <label className="text-black font-bold ml-1 text-sm md:text-base">From</label>
              <div className="w-full h-15.5 bg-white/80 border border-gray-300 flex items-center px-4 rounded-lg shadow-sm">
                <span className="text-gray-500 italic text-sm md:text-base">Select sender...</span>
              </div>
            </div>

            
            <div className="flex flex-col gap-1">
              <label className="text-black font-bold ml-1 text-sm md:text-base">To</label>
              <div className="w-full h-15.5 bg-white/80 border border-gray-300 flex items-center px-4 rounded-lg shadow-sm">
                <span className="text-gray-500 italic text-sm md:text-base">Select recipient...</span>
              </div>
            </div>

     
            <div className="flex flex-col gap-1">
              <label className="text-black font-bold ml-1 text-sm md:text-base">Amount</label>
              <div className="w-full h-15.5 bg-white/95 border border-gray-300 flex items-center justify-between px-4 rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl md:text-2xl">★</span>
                  <span className="text-gray-800 font-semibold">50.00</span>
                </div>
                <div className="flex items-center gap-6 font-bold text-xl md:text-2xl">
                  <button className="text-green-600 hover:scale-110 active:scale-95 transition-all">+</button>
                  <button className="text-red-600 hover:scale-110 active:scale-95 transition-all">−</button>
                </div>
              </div>
            </div>

         
            <div className="w-full flex justify-end">
              <div className="h-[62px] w-full md:w-auto flex items-center justify-center md:justify-end px-6 bg-blue-100/80 text-black rounded-xl font-mono border-l-4 border-yellow-400">
                Balance: 120.00
              </div>
            </div>

           
            <button 
              onClick={handleTransfer}
              className="mt-4 w-full h-[62px] bg-[#5F4F4F]/50 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors uppercase tracking-widest"
            >
              Transfer Credits
            </button>
          </div>
        ) : (
         
          <div className="flex flex-col items-center justify-center p-8 bg-white/90 rounded-3xl shadow-xl border-4 border-green-500 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-green-600 text-5xl">✓</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Success!</h2>
            <p className="text-gray-600 font-medium text-center mb-6">
              Your credits have been <br /> successfully transferred.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-transform active:scale-95"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}