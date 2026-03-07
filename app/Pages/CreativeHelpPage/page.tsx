"use client";

import React from 'react';

const Page = () => {
  
  const bottomCardData = [
    { id: 19, title: "Drawing", img: "/assets/drawing.jpeg" },
    { id: 20, title: "Sewing", img: "/assets/sewing.jpeg" },
    { id: 21, title: "Festival decoration ", img: "/assets/fesrivedecor.jpeg" },
    { id: 22, title: "Sculpting", img: "/assets/sculpting.jpeg" },
    { id: 23, title: "DIY ideas ", img: "/assets/diy ideas.jpeg" },
    { id: 24, title: "Simple home décor crafts", img: "/assets/craft homedecor.jpeg" },
    { id: 25, title: "Craft project assistance", img: "/assets/craftproject.jpeg" },
    { id: 26, title: " Origami guidance", img: "/assets/origame.jpeg" },
    { id: 27, title: "Color palette suggestions", img: "/assets/colorpallet.jpeg" },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

 <div className="w-full max-w-[596px] min-h-[96px]  bg-[#5F4F4F]/26 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
         Creative Help
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
          ""Where the value of an hour is written in effort, not dollars.""
        </p>
      </div>
    </div>
  );
};

export default Page;