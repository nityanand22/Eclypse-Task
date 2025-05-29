import React from "react";
import { assets } from "../assets/assets";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden gap-3 sm:gap-6">
      {/* header */}
      <div className="flex items-end justify-between py-2">
        <div className="relative inline-block">
          <h1 className="text-2xl sm:text-5xl md:text-6xl text-white inline">
            Eclypse
          </h1>
          <span className="absolute -top-2 -right-5 p-1 border border-white text-white rounded-full text-xs w-4 h-4 flex items-center justify-center bg-black">
            R
          </span>
        </div>
        <div className="flex items-center">
          <p className="text-white text-xs sm:text-base md:text-lg">
            &copy; 2025
          </p>
        </div>
      </div>
      {/* image */}
      <div className="w-full flex items-center">
        <img
          src={assets.main}
          alt="Main"
          className="w-full max-h-56 sm:max-h-72 md:max-h-[32rem] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
