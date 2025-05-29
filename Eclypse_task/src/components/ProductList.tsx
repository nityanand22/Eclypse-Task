import React from "react";
import { assets } from "../assets/assets";

const ProductList: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        <video
          src={assets.video}
          className="w-full md:w-2/3 h-40 sm:h-56 md:h-72 object-cover rounded-lg"
          autoPlay
          loop
          muted
        ></video>
        <div className="hidden md:block w-full md:w-1/3">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { src: assets.picture1, alt: "Picture 1" },
          { src: assets.picture3, alt: "Picture 2" },
          { src: assets.picture4, alt: "Picture 3" },
        ].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-32 sm:h-40 md:h-56 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
