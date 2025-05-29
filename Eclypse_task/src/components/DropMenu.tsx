import { useState } from "react";

const DropMenu: React.FC = () => {
  const [showItem, setShowItem] = useState<number | null>(null);

  const options: string[] = [
    "Size & Fit",
    "Delivery & Returns",
    "How This Was Made",
  ];

  return (
    <div className="w-full bg-black px-2 sm:px-6 md:px-10 py-2">
      <div className="flex flex-col divide-y divide-neutral-800">
        {options.map((option, index) => (
          <div
            className="flex flex-col"
            onClick={() => setShowItem(showItem === index ? null : index)}
            key={index}
          >
            <div className="flex items-center justify-between py-6  md:py-8 lg:py-10 text-2xl md:text-3xl lg:text-4xl cursor-pointer">
              <button className="text-white text-left w-full hover:underline transition">
                {option}
              </button>
              <span
                className={`text-white mr-4 font-extrabold transition-transform duration-500${
                  showItem === index ? " rotate-180" : ""
                }`}
              >
                &#8595;
              </span>
            </div>

            {showItem === index && (
              <div
                className={`text-white overflow-hidden transition-all duration-300 ease-in-out ${
                  showItem === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-2 divide-y divide-neutral-800 text-white px-2 py-2">
                  <p className="text-lg font-normal">Example</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
