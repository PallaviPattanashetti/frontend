"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HelpSection() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-112.5 min-h-17.5 bg-[#5F4F4F]/50 rounded-2xl flex items-center justify-center my-6 md:my-8 p-4 border-2 border-black shadow-lg"
      >
        <h1 className="text-3xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Credits
        </h1>
      </motion.div>

      
      <div className="w-full max-w-213 min-h-135 border-[6px] md:border-10 border-black bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center py-8 px-4 gap-6 shadow-2xl rounded-lg relative">
        <div className="w-full max-w-154 flex flex-col gap-5">
          
          
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold ml-1 text-sm uppercase">From</label>
            <div className="w-full h-14 bg-gray-200/80 border-2 border-black flex items-center px-4 rounded-lg cursor-not-allowed">
              <span className="text-black font-bold">Current User (You)</span>
            </div>
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold ml-1 text-sm uppercase">To</label>
            <select className="w-full h-14 bg-white/90 border-2 border-black px-4 rounded-lg font-bold text-black focus:ring-0 focus:outline-none appearance-none">
              <option value="">Select recipient...</option>
              <option value="1">Sarah</option>
              <option value="2">Ross</option>
              <option value="3">Fitness Coach Emily</option>
            </select>
          </div>

         
          <div className="flex flex-col gap-1">
            <label className="text-black font-bold ml-1 text-sm uppercase">Amount</label>
            <div className="w-full h-16 bg-white border-2 border-black flex items-center justify-between px-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-xl font-black text-black">50.00</span>
              </div>
              <div className="flex items-center gap-6 font-bold text-2xl">
                <button className="text-green-600 hover:scale-110 active:scale-90 transition-transform">+</button>
                <button className="text-red-600 hover:scale-110 active:scale-90 transition-transform">−</button>
              </div>
            </div>
          </div>

    
          <div className="w-full flex justify-end">
            <div className="h-10 flex items-center px-4 bg-yellow-100 text-black rounded-lg font-mono border-2 border-black font-bold text-sm shadow-sm">
              Available: 120.00
            </div>
          </div>

      
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#000" }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full h-16 bg-[#5F4F4F]/80 text-white font-black rounded-xl border-2 border-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors"
          >
            Transfer Credits
          </motion.button>
        </div>
      </div>

     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic font-medium px-4">
          "A bank where every person starts with the same balance: 24 hours."
        </p>
      </motion.div>
    </div>
  );
}