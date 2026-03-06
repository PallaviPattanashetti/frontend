"use client";

import React from 'react';

const Page = () => {
  
  const bottomCardData = [
    { id: 10, title: "Computer", img: "/assets/Computer.jpeg" },
    { id: 11, title: "Caption writing", img: "/assets/caption write.png" },
    { id: 12, title: "Communication", img: "/assets/communications.jpeg" },
    { id: 13, title: "kids Tutoring", img: "/assets/kidstutor.jpeg" },
    { id: 14, title: "Speech writing ", img: "/assets/speech.jpeg" },
    { id: 15, title: "Reading buddy", img: "/assets/readingbuddy.jpeg" },
    { id: 16, title: "Caption writing", img: "/assets/caption write.png" },
    { id: 17, title: " Homework Help", img: "/assets/homework .jpeg" },
    { id: 18, title: "Resume or bio polishing", img: "/assets/resume.jpeg" },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

 <div className="w-full max-w-[596px] min-h-[96px]  bg-[#5F4F4F]/26 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-2xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
         Learning Help
        </h1>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.id}
           
            className="w-full max-w-[280px] min-h-[380px] bg-[#F4F4F4]/50 border-[1px] rounded-2xl border-black flex flex-col overflow-hidden shadow-sm"
          >
            
            <div className="w-full h-[180px] border-b-[1px] border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

          
            <div className="p-5 flex flex-col items-center flex-grow justify-between">
              <div className="w-full">
                <h5 className="text-xl font-bold text-gray-900 mb-2 text-center leading-tight">
                  {item.title}
                </h5>
              
               
              </div>

           
              <button className="w-full max-w-[180px] py-3 border-[2px] border-black bg-[#6F7887]/80 rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold font-['Imprima'] text-[18px] sm:text-[20px]">
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>
       <div>
        <p className="text-[40px] mt-10 text-black text-center">
          "Trade skills, gain time, grow together."
        </p>
      </div>
    </div>
  );
};

export default Page;