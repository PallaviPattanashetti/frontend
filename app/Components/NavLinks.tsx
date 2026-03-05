import { Button } from "flowbite-react/components/Button";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react/components/Navbar";

export function NavLinks() {
  return (
    
    <div 
      className=" h-[182px] bg-[#CD9238]/42 flex items-center justify-center" 
      style={{ backgroundColor: "" }}
    >
      <Navbar fluid rounded className="w-full bg-transparent">
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {/* <Button>Get started</Button> */}
          <input
              id="name"
              type="text"
              placeholder="Enter your First and Last name..."
             
              required
            />
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>

          <NavbarLink href="#">Create Account</NavbarLink>
          <NavbarLink href="#">LogIn</NavbarLink>
          <NavbarLink href="#">Categories</NavbarLink>
          <NavbarLink href="#">Chats</NavbarLink>
          <NavbarLink href="#">Credits</NavbarLink>
          <NavbarLink href="#">Maps</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}