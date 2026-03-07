"use client";

import React from 'react';

const Page = () => {
  
  const bottomCardData = [
    { id: 46, title: "Vet visits ", img: "/assets/Vet visits.jpeg" },
    { id: 47, title: "Pet Playdate", img: "/assets/Pet Playdate.jpeg" },
    { id: 48, title: "Litter/Cage Cleaning ", img: "/assets/Littercage.jpeg" },
    { id: 49, title: "Grooming", img: "/assets/Grooming.jpeg" },
    { id: 50, title: " Dog Walking", img: "/assets/Dog Walking.jpeg" },
    { id: 51, title: "Pet Sitting", img: "/assets/Pet Sitting.jpeg" },
    { id: 52, title: "Feeding", img: "/assets/Feeding.jpeg" },
    { id: 53, title: " Light bathing", img: "/assets/carpet.jpeg" },
    { id: 54, title: " Car ride assistance for pets", img: "/assets/seasonal cleanup.jpeg" },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

 <div className="w-full max-w-[596px] min-h-[96px]  bg-[#5F4F4F]/26 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
         Garden Help
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
        "Time is not a commodity, it is a gift."
        </p>
      </div>
    </div>
  );
};

export default Page;