import { assets } from "../assets/assets";
import React, { useEffect, useState } from "react";

interface ProductImageSet {
  main: string;
  thumbnails: string[];
}

const productImages: ProductImageSet = {
  main: assets.frame4,
  thumbnails: [assets.frame1, assets.frame2, assets.frame3],
};

const Product: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPrice(data[0].price);
        }
      });
  }, []);

  return (
    <div className="bg-white flex flex-col gap-2 md:flex-row md:gap-4 w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
      <div className="w-full object-cover">
        <img
          src={productImages.main}
          alt="Main Product"
          className="h-full sm:h-full md:h-full object-cover"
        />
      </div>

      <div className="px-10 flex flex-col justify-around py-5">
        <p className="hidden sm:block">
          A tailored composition in motion. Cut from structured wool with a
          scuplted shoulder and softened hen, this piece captures presence
          withoout force. Worn here in the stillness of a city in motion.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
          {productImages.thumbnails.map((src, index) => (
            <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>

        <p className="border border-b-gray-400"></p>

        <div className="flex items-end gap-4">
          <p className="text-4xl">{price?.toLocaleString()}</p>
          <p className="text-gray-400 text-xs">MRP incl. of all taxes</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-gray-600">Please select a size</p>
          <div>
            <p className="text-xs text-gray-400">Size chart</p>
            <p className="border border-t-gray-400 h-[1px]"></p>
          </div>
        </div>

        <div className="w-full p-2 flex flex-wrap justify-around md:justify-start sm:gap-4 rounded-lg">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <p
              key={size}
              className="bg-gray-200 px-3 py-2 sm:px-6 sm:py-3 rounded"
            >
              {size}
            </p>
          ))}
        </div>

        <p className="border border-b-gray-400"></p>

        <div className="flex items-center gap-10">
          <button className="flex-2 py-3 px-6 border border-black rounded-md">
            Add to Cart
          </button>
          <button className="flex-1 bg-black text-white rounded-md py-3 px-6">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
