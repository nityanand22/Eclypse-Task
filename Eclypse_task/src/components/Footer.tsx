import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-[2vw] py-[4vw] max-w-full">
      <div className="flex flex-row items-start justify-between gap-[1vw] w-full min-w-0 max-w-screen">
        <div className="flex flex-col min-w-0 flex-[1.5]">
          <div className="flex items-center mb-[1vw]">
            <h1 className="font-light text-sm sm:text-[5vw] md:text-[2vw] leading-none">
              Eclypse
            </h1>
            <span className="ml-2 text-[3vw] sm:text-lg md:text-xl font-bold">
              <ArrowUpRight />
            </span>
          </div>
          <div className="flex flex-col gap-[0.5vw] text-sm sm:text-sm md:text-lg">
            <div className="flex items-center gap-[1vw] sm:gap-[1vw]">
              <span>Home</span>
              <span>/</span>
              <span>About</span>
              <span>/</span>
              <span>Buy</span>
              <span>/</span>
            </div>
            <div className="flex items-center gap-[2vw] sm:gap-[1vw]">
              <span>Our Customers</span>
              <span>/</span>
            </div>
            <span>Contacts</span>
          </div>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="uppercase text-gray-400 tracking-[0.2em] text-sm sm:text-[2vw] md:text-[0.8vw] mb-[1vw]">
            Contact
          </span>
          <span className="font-light text-xs sm:text-sm md:text-lg mb-[2vw]">
            +91 123-456-7890
          </span>
          <span className="uppercase text-gray-400 tracking-[0.2em] text-[2.5vw] sm:text-[2vw] md:text-[0.8vw] mb-[1vw]">
            Email
          </span>
          <span className="text-xs sm:text-sm md:text-lg">
            eclypse@gmail.com
          </span>
        </div>
        <div className=" hidden md:block lg:block flex-1 min-w-0"></div>
        <div className="flex flex-col items-end justify-between min-w-0 flex-1 relative h-full">
          <button className="w-[6vw] h-[6vw] sm:w-[10vw] sm:h-[10vw] md:w-[3vw] md:h-[3vw] bg-white text-black rounded-full flex items-center justify-center mb-[2vw] shadow-lg">
            <ArrowUp className="w-[4vw] h-[4vw] sm:w-[5vw] sm:h-[5vw] md:w-[1.5vw] md:h-[1.5vw]" />
          </button>
          <span className="text-[2.5vw] sm:text-[2vw] md:text-[0.8vw] text-gray-400 mt-auto">
            © Eclypse 2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
