import React from "react";
import Image from "@/public/assets/Background.png";
import { Label } from "flowbite-react/components/Label";
import { TextInput } from "flowbite-react/components/TextInput";
import { Checkbox } from "flowbite-react/components/Checkbox";
import Link from "next/dist/client/link";
import { Button } from "flowbite-react/components/Button";

const Page = () => {
  const customInputContainer =
    "w-full max-w-[505px] h-[63px] border-2 border-black rounded-[15px] bg-[#6F7887]/21 flex items-center px-5";

  const inputStyle =
    "w-full h-full bg-transparent border-none outline-none focus:ring-0 text-white placeholder-black/60";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <form className="flex w-full max-w-lg flex-col items-center gap-6 mt-10">
        <div className="w-full flex flex-col items-center">
          <div className={customInputContainer}>
            <input
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              className={inputStyle}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className={customInputContainer}>
            <input
              id="password2"
              type="password"
              placeholder="Enter password..."
              className={inputStyle}
              required
            />
          </div>
        </div>
  

   <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
 
        <Button
          type="submit"
          className="w-full! max-w-174! h-20.25! bg-[#5F4F4F]/50! hover:bg-[#28a8af]! border-2 border-black rounded-[20px] !text-black text-lg font-bold text-5xl"
        >
          Login account
        </Button>
      </form>
      
      <div>
        <p className="text-[40px] mt-100">
        "Invest an hour. Change a life."
        </p>
      </div>
    </div>
  );
};

export default Page;
