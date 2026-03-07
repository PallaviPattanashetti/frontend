
"use client";

import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavLinks() {
  return (
    <div className="bg-[#28a8af]/40 w-full">
      <Navbar fluid rounded={false} className="bg-transparent px-6 py-4">
        
        
        <div className="flex md:order-2 items-center gap-2 md:gap-4 ml-auto">
          <input
            type="text"
            className="h-[40px] md:h-[50px] w-[140px] md:w-[380px] rounded-[45px] bg-[#5F4F4F]/30 placeholder:text-black text-white px-4 border-none focus:ring-0 focus:outline-none"
            placeholder="Search..."
          />
          <NavbarToggle />
        </div>

       
        <NavbarCollapse>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 py-4 md:py-0 w-full">
            {[
              { icon: "/assets/HomeHelp.png", label: "Home" },
              { icon: "/assets/AC.png", label: "Account" },
              { icon: "/assets/logIn.png", label: "Login" },
              { icon: "/assets/handshake.png", label: "Categories" },
              { icon: "/assets/Chat Icon.png", label: "Chats" },
              { icon: "/assets/credit-icon-7.png", label: "Credits" },
              { icon: "/assets/Location.png", label: "Maps" },
            ].map((item, index) => (
              <NavbarLink 
                key={index} 
                href="#" 
                className="flex flex-col items-center justify-center hover:bg-black/5 rounded-lg transition-colors p-2"
              >
                <img src={item.icon} className="h-8 w-8 md:h-12 md:w-12" alt={item.label} />
                <span className="text-xs md:text-sm mt-1 font-bold text-black">{item.label}</span>
              </NavbarLink>
            ))}
          </div>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}