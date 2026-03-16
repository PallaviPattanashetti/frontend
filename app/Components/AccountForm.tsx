"use client";
import React from "react";
import { Checkbox, Label, Button } from "flowbite-react";
import Link from "next/link";

const AccountForm = () => {
 
  const customInputContainer =
    "w-full max-w-[505px] min-h-[50px] md:h-[63px] border-2 border-black rounded-[15px] bg-white flex items-center justify-center transition-all shadow-sm focus-within:ring-2 focus-within:ring-black";

  
  const inputStyle =
    "w-full h-full bg-transparent border-none outline-none focus:ring-0 text-black placeholder-black/50 text-sm md:text-base text-center";

  const formFields = [
    { id: "name", type: "text", placeholder: "Enter your First and Last name..." },
    { id: "email", type: "email", placeholder: "name@flowbite.com" },
    { id: "password", type: "password", placeholder: "Enter password..." },
    { id: "city", type: "text", placeholder: "Enter your city..." },
    { id: "skill", type: "text", placeholder: "Enter your skill..." },
  ];

  return (
    <form className="flex w-full max-w-lg flex-col items-center gap-4 md:gap-5 mt-2">
      {formFields.map((field) => (
        <div key={field.id} className="w-full flex flex-col items-center px-4 md:px-0">
          <div className={customInputContainer}>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className={inputStyle}
              required
            />
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-lg border border-black/10 shadow-sm mt-2">
        <Checkbox
          id="agree"
          className="h-5 w-5 cursor-pointer border-2 border-black focus:ring-0"
          required
        />
        <Label
          htmlFor="agree"
          className="flex gap-1 text-black font-bold text-sm cursor-pointer"
        >
          I agree with the
          <Link href="#" className="text-blue-700 hover:underline">
            terms and conditions
          </Link>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full max-w-[396px] min-h-[60px] md:min-h-[90px] bg-[#5F4F4F]/70 hover:bg-[#28a8af] border-2 border-black rounded-[20px] md:rounded-[30px] transition-all mt-2"
      >
        <span className="text-black text-xl md:text-3xl font-extrabold uppercase">
          Create Account
        </span>
      </Button>

      <Button 
        color="light"
        className="w-full max-w-[396px] bg-white text-black border-2 border-black hover:bg-gray-100 font-bold"
      >
        Login with Google
      </Button>
    </form>
  );
};

export default AccountForm;