"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const bottomCardData = [
    {
   
      title: "Computer",
      img: "/assets/Computer.jpeg",
      slug: "computer-skills",
    },
    {
  
      title: "Caption Writing",
      img: "/assets/caption write.png",
      slug: "caption-writing",
    },
    {

      title: "Communication",
      img: "/assets/communications.jpeg",
      slug: "communication",
    },
    {
    
      title: "Kids Tutoring",
      img: "/assets/kidstutor.jpeg",
      slug: "kids-tutoring",
    },
    {

      title: "Speech Writing",
      img: "/assets/speech.jpeg",
      slug: "speech-writing",
    },
    {
      
      title: "Reading Buddy",
      img: "/assets/readingbuddy.jpeg",
      slug: "reading-buddy",
    },
    {
      
      title: "Creative Writing",
      img: "/assets/caption write.png",
      slug: "creative-writing",
    }, 
    {
     
      title: "Homework Help",
      img: "/assets/homework .jpeg",
      slug: "homework-help",
    },
    {
      
      title: "Resume or Bio Polishing",
      img: "/assets/resume.jpeg",
      slug: "resume-polishing",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-149 min-h-24 bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Learning Help
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-70 min-h-95 bg-[#F4F4F4]/50 border rounded-2xl border-black flex flex-col overflow-hidden shadow-sm"
          >
            <div className="w-full h-45 border-b border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col items-center grow justify-between">
              <div className="w-full">
                <h5 className="text-xl font-bold text-gray-900 mb-2 text-center leading-tight">
                  {item.title}
                </h5>
              </div>

              <button
                onClick={() => router.push(`/learning-help/${item.slug}`)}
                className="w-full max-w-45 py-3 border-2 border-black bg-[#6F7887]/80 rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold text-[18px] sm:text-[20px]"
              >
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic">
          "Redefining wealth, one hour at a time."
        </p>
      </div>
    </div>
  );
};

export default Page;
