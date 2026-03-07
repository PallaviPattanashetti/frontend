
"use client";
import React from "react";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import Link from "next/link";
import { Button } from "flowbite-react/components/Button";

const RegisterPage = () => {
 
  const customInputContainer =
    "w-full max-w-[505px] min-h-[50px] md:h-[63px] border-2 border-black rounded-[15px] bg-white flex items-center px-5 transition-all shadow-sm";

  const inputStyle =
    "w-full h-full bg-transparent border-none outline-none focus:ring-0 text-black placeholder-black/50 text-sm md:text-base";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4 md:p-8"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
  
      <div className="w-full max-w-[396px] min-h-[80px] md:min-h-[99px] bg-[#5F4F4F]/60 rounded-2xl flex items-center justify-center my-6 md:my-10 px-4 border border-black/10">
        <h1 className="text-[28px] md:text-[64px] font-extrabold text-black tracking-tight text-center leading-tight">
          Welcome
        </h1>
      </div>

      <form className="flex w-full max-w-lg flex-col items-center gap-4 md:gap-5 mt-2">
        
        {[
          { id: "name", type: "text", placeholder: "Enter your First and Last name..." },
          { id: "email2", type: "email", placeholder: "name@flowbite.com" },
          { id: "password2", type: "password", placeholder: "Enter password..." },
          { id: "city", type: "text", placeholder: "Enter your city..." },
          { id: "skill", type: "text", placeholder: "Enter your skill..." },
        ].map((input) => (
          <div key={input.id} className="w-full flex flex-col items-center">
            <div className={customInputContainer}>
              <input
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                className={inputStyle}
                required
              />
            </div>
          </div>
        ))}

        <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-lg border border-black/10 shadow-sm">
          <Checkbox id="agree" className="h-5 w-5 cursor-pointer border-2 border-black" required />
          <Label htmlFor="agree" className="flex gap-1 text-black font-bold text-sm cursor-pointer">
            I agree with the 
            <Link href="#" className="text-blue-700 hover:underline">
              terms and conditions
            </Link>
          </Label>
        </div>

 
        <Button
          type="submit"
          className="w-full max-w-[396px] min-h-[60px] md:min-h-[90px] bg-[#5F4F4F]/70 hover:!bg-[#28a8af] border-2 border-black !rounded-[10px] md:!rounded-[30px] !text-black !text-xl md:!text-3xl font-extrabold transition-all mt-2"
        >
          Create Account
        </Button>

        <Button className="w-full max-w-[396px] bg-white text-black border-2 border-black hover:!bg-gray-100 font-bold">
          Login with Google
        </Button>
      </form>

     
      <div className="max-w-2xl text-center mt-8 md:mt-12">
        <p className="text-xl md:text-[36px] text-black font-bold italic leading-tight">
          "The bank where everyone is equally wealthy."
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
