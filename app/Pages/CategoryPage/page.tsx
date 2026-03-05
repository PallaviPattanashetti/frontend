"use client";
import { Card } from "flowbite-react";

export default function HelpSection() {
  const topSectionImages = ["/assets/offerhelp.png", "/assets/handshake.png"];

  const bottomCardData = [
    { id: 1, img: "/assets/HomeHelp.png", title: "Home Help" },
    { id: 2, img: "/assets/Learning Help.png", title: "Learning Help" },
    { id: 3, img: "/assets/Garden.png", title: "Garden Help" },
    { id: 4, img: "/assets/pethelp.png", title: "Pet Help" },
    { id: 5, img: "/assets/creative.png", title: "Creative Help" },
    { id: 6, img: "/assets/Fitness help.png", title: "Fitness Help" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/assets/Background.png')" }}
    >
      <div className="w-full max-w-[896px] min-h-[99px] border-4 border-black bg-[#32C2CA] rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-3xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Welcome to Help Category
        </h1>
      </div>

      <div
        className="w-full max-w-[1160px] min-h-auto md:h-[416px] border-4 border-black flex flex-col md:flex-row  items-center justify-center md:justify-between p-6 md:px-10 rounded-xl gap-6 mb-12"
        style={{ backgroundColor: "rgba(205, 146, 56, 0.08)" }}
      >
        {[1, 2].map((i) => (
          <Card
            key={i}
            className="w-full max-w-[224px] h-[202px] hover:shadow-lg transition-shadow"
            imgSrc={topSectionImages[i - 1]}
            imgAlt={`Feature ${i}`}
          >
            <button
              className="w-[221px] h-[51px] border-[3px] border-black flex items-center justify-center font-bold text-black"
              style={{ backgroundColor: "rgba(111, 120, 135, 0.8)" }}
            >
              Get Help
            </button>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 w-full max-w-[1000px]  justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.id}
            className="w-[300px] h-[432px] bg-[#F4F4F4]/50 border-[1px] rounded-2xl border-black flex flex-col"
          >
            <div className="w-[300px] h-[206px] border-b-[1px]  border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col items-start flex-grow">
              <h5 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h5>
              <p className="text-gray-700 text-sm mb-auto"></p>

              <button className="w-[190px] h-[60px] border-[3px] border-black bg-transparent rounded-2xl text-black hover:bg-black hover:text-white transition-colors duration-200 font-bold font-['Imprima'] text-[36px] ml-10">
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[40px] mt-50 text-black">
          "Building a world where kindness is the ultimate credit."
        </p>
      </div>
    </div>
  );
}
