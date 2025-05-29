import { assets } from "../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isShipping = location.pathname === "/shipping-address";
  const bgClass = isShipping ? "bg-white text-black" : "bg-black text-white";

  return (
    <div
      className={`${bgClass} flex items-center justify-between py-1 px-4 font-medium`}
    >
      <div>
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="logo"
            className="w-16 sm:w-24 md:w-32 lg:w-36 transition-all duration-200 rounded-lg"
          />
        </NavLink>
      </div>

      <ul className="flex flex-row items-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-base md:text-lg px-2 sm:px-6 md:px-10">
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li>
          <NavLink to="/shipping-address">Cart</NavLink>
        </li>
        <li className={isShipping ? "hidden" : ""}>
          <button className="px-3 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2.5 bg-white text-black rounded-md text-xs sm:text-base md:text-lg whitespace-nowrap">
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
