"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HelpSection() {
  const router = useRouter();
  const [helpType, setHelpType] = useState<"get" | "offer" | null>(null);

  const topSectionImages = ["/assets/offerhelp.png", "/assets/handshake.png"];

  const bottomCardData = [
    {
      id: 1,
      img: "/assets/HomeHelp.png",
      title: "Home Help",
      path: "./HomeHelpPage",
    },
    {
      id: 2,
      img: "/assets/Learning Help.png",
      title: "Learning Help",
      path: "./LearningHelpPage",
    },
    {
      id: 3,
      img: "/assets/Garden.png",
      title: "Garden Help",
      path: "./GardenHelpPage",
    },
    {
      id: 4,
      img: "/assets/pethelp.png",
      title: "Pet Help",
      path: "./PetHelpPage",
    },
    {
      id: 5,
      img: "/assets/creative.png",
      title: "Creative Help",
      path: "./CreativeHelpPage",
    },
    {
      id: 6,
      img: "/assets/Fitness help.png",
      title: "Fitness Help",
      path: "./FitnessHelpPage",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-[550px] min-h-[70px] bg-[#5F4F4F]/50 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Help Category
        </h1>
      </div>

      <div
        className="w-full max-w-[1160px] min-h-auto md:min-h-[416px] border-4 border-black flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:px-10 rounded-xl gap-8 mb-12"
        style={{ backgroundColor: "rgba(205, 146, 56, 0.08)" }}
      >
        <div
          onClick={() => setHelpType("get")}
          className={`w-56 h-50.5 cursor-pointer transition-all duration-300 border-4 rounded-lg bg-white overflow-hidden flex flex-col ${
            helpType === "get"
              ? "border-blue-600 scale-105 shadow-xl"
              : "border-black"
          }`}
        >
          <img
            src={topSectionImages[0]}
            alt="Get Help"
            className="w-full h-[140px] object-cover"
          />
          <div className="grow flex items-center justify-center bg-[#6F7887]/80 border-t-2 border-black font-bold uppercase text-black">
            Get Help
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl md:text-[60px] font-bold text-black text-center px-4 leading-tight uppercase">
            {helpType === "get"
              ? "I Need Help"
              : helpType === "offer"
                ? "I Want to Help"
                : "Choose your help"}
          </p>
          {helpType && (
            <button
              onClick={() => setHelpType(null)}
              className="text-xs font-bold underline mt-2 text-black/60 hover:text-black transition-colors"
            >
              BACK TO CHOOSE
            </button>
          )}
        </div>

        <div
          onClick={() => setHelpType("offer")}
          className={`w-56 h-50.5 cursor-pointer transition-all duration-300 border-4 rounded-lg bg-white overflow-hidden flex flex-col ${
            helpType === "offer"
              ? "border-green-600 scale-105 shadow-xl"
              : "border-black"
          }`}
        >
          <img
            src={topSectionImages[1]}
            alt="Offer Help"
            className="w-full h-[140px] object-cover"
          />
          <div className="grow flex items-center justify-center bg-[#6F7887]/80 border-t-2 border-black font-bold uppercase text-black">
            Offer Help
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 w-full max-w-[1000px] justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.id}
            className={`w-[300px] h-[432px] bg-[#F4F4F4]/50 border-2 rounded-2xl border-black flex flex-col transition-all duration-300 ${
              !helpType
                ? "opacity-30 grayscale pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div className="w-full h-[206px] border-b-2 border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col items-center justify-between grow">
              <h5 className="text-xl font-bold text-gray-900 text-center uppercase tracking-tighter">
                {item.title}
              </h5>

              <button
                onClick={() => item.path && router.push(item.path)}
                className={`w-[190px] h-[60px] border-[3px] border-black rounded-2xl text-black font-bold text-[36px] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md ${
                  helpType === "get" ? "bg-blue-400" : "bg-green-400"
                }`}
              >
                Click
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[40px] mt-10 text-black text-center">
          "Building a world where kindness is the ultimate credit."
        </p>
      </div>
    </div>
  );
}
