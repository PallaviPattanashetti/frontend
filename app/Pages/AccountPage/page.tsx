import React from "react";
import Image from "@/public/assets/Background.png";
import { Checkbox } from "flowbite-react/components/Checkbox";
import { Label } from "flowbite-react/components/Label";
import Link from "next/dist/client/link";
import { Button } from "flowbite-react/components/Button";

const RegisterPage = () => {
  const customInputContainer =
    "w-full max-w-[505px] h-[63px] border-2 border-black rounded-[15px] autofill: bg-[#CD9238]/40 flex items-center px-5";

  const inputStyle =
    "w-full h-full bg-transparent border-none outline-none focus:ring-0 text-black placeholder-black/60";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/assets/Background.png')" }}
    >
      <div className="w-full max-w-[896px] min-h-[99px] border-4 border-black bg-[#32C2CA] rounded-2xl flex items-center justify-center my-8 md:my-12">
        <h1 className="text-[40px] md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Welcome To TimeBank
        </h1>
      </div>

      <form className="flex w-full max-w-lg flex-col items-center gap-6 mt-10 ">
        <div className="w-full flex flex-col items-center">
          <div className={customInputContainer}>
            <input
              id="name"
              type="text"
              placeholder="Enter your First and Last name..."
              className={inputStyle}
              required
            />
          </div>
        </div>

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

        <div className="w-full flex flex-col items-center">
          <div className={customInputContainer}>
            <input
              id="city"
              type="text"
              placeholder="Enter your city..."
              className={inputStyle}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className={customInputContainer}>
            <input
              id="skill"
              type="text"
              placeholder="Enter your skill..."
              className={inputStyle}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="!w-full !max-w-[696px] !h-[109px] !bg-[#32C2CA] hover:!bg-[#28a8af] border-2 border-black !rounded-[45px] !text-black !text-5xl font-bold"
        >
          Create Account
        </Button>
      </form>

      <div>
        <p className="text-[40px] mt-10">
          "The bank where everyone is equally wealthy."
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
