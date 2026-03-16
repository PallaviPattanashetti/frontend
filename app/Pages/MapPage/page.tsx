
"use client";
import { useMapLocation } from "@/context/context";
import { fetchMapLocation } from "@/dataservices/dataservices";
import { Button } from "flowbite-react";
import React, { useState } from "react";

export default function MapPage() {

  const { maplocation, setMapLocation } = useMapLocation();

  const [searchPlace, setSearchPlace] = useState<string>("Manteca");

 const handleEnter = async () => {
    const data = await fetchMapLocation("Manteca");
    
    if (data && data.length > 0) {
      setMapLocation(data[0]); 
    } else {
      console.log("No location found");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="bg-gray-500 bg-opacity-60 rounded-xl p-4 mt-8 mb-8">
        <h1 className="text-3xl font-bold text-black text-center">
 
          {maplocation ? `Welcome to ${maplocation.title}` : "Welcome"}
        </h1>
      </div>

      <div className="w-full max-w-4xl h-96 border-4 border-white rounded-xl overflow-hidden mb-10">
        <iframe
          title="Map"
          width="100%"
          height="100%"
        
          src={maplocation 
            ? `https://www.openstreetmap.org/export/embed.html?bbox=${maplocation.long - 0.02}%2C${maplocation.lat - 0.02}%2C${maplocation.long + 0.02}%2C${maplocation.lat + 0.02}&layer=mapnik&marker=${maplocation.lat}%2C${maplocation.long}`
            : "https://www.openstreetmap.org/export/embed.html?bbox=-110%2C-20%2C110%2C70&layer=mapnik"
          }
          style={{ border: "0" }}
        ></iframe>
      </div>

      <Button onClick={handleEnter} className="bg-black/20 text-4xl stroke-3">
        Enter
      </Button>

      <p className="text-xl font-semibold text-center italic mt-6">
        {maplocation 
          ? `Now showing: ${maplocation.category}` 
          : "Wherever you are, you have something to give."}
      </p>
    </div>
  );
}