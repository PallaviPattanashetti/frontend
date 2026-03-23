"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

const PetPage = () => {
  const router = useRouter();

  const bottomCardData = [
    { title: "Vet Visits", img: "/assets/Vet visits.jpeg", slug: "vet-visits" },
    {
      title: "Pet Playdate",
      img: "/assets/Pet Playdate.jpeg",
      slug: "pet-playdate",
    },
    {
      title: "Litter/Cage Cleaning",
      img: "/assets/Cage.jpeg",
      slug: "cleaning",
    },
    { title: "Grooming", img: "/assets/Grooming.jpeg", slug: "grooming" },
    {
      title: "Dog Walking",
      img: "/assets/Dog Walking.jpeg",
      slug: "dog-walking",
    },
    {
      title: "Pet Sitting",
      img: "/assets/Pet Sitting.jpeg",
      slug: "pet-sitting",
    },
    { title: "Feeding", img: "/assets/Feeding.jpeg", slug: "feeding" },
    { title: "Light Bathing", img: "/assets/Light bathing.jpeg", slug: "bathing" },
    {
      title: "Car Ride Assistance",
      img: "/assets/seasonal cleanup.jpeg",
      slug: "transport",
    },
  ];

  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const cardVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="my-8 flex min-h-24 w-full max-w-149 items-center justify-center rounded-2xl border-2 border-black bg-[#5F4F4F]/25 p-4 shadow-lg backdrop-blur-sm"
      >
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-black md:text-[64px]">
          Pet Help
        </h1>
      </motion.div>

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="mb-12 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {bottomCardData.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVars}
            whileHover={{ y: -10 }}
            className="flex min-h-95 w-full max-w-70 flex-col overflow-hidden rounded-2xl border-2 border-black bg-[#F4F4F4]/60 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="relative h-45 w-full overflow-hidden border-b-2 border-black">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="flex grow flex-col items-center justify-between p-5">
              <div className="w-full">
                <h5 className="mb-2 text-center text-xl leading-tight font-black tracking-tighter text-black uppercase">
                  {item.title}
                </h5>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(`/pet-help/${item.slug}`)}
                className="w-full max-w-45 rounded-xl border-2 border-black bg-[#6F7887]/80 py-3 font-['Imprima'] text-[18px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors sm:text-[20px]"
              >
                Click Here
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mt-10 text-center text-[30px] font-medium text-black italic md:text-[40px]">
          "Give what you know, get what you need."
        </p>
      </motion.div>
    </div>
  );
};

export default PetPage;
