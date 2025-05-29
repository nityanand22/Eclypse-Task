import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";

// Optional: Define interface if address data will be used later
interface AddressFormData {
  firstName: string;
  lastName: string;
  address: string;
  aptNumber: number | string;
  state: string;
  zip: string;
}

const ShippingAddress: React.FC = () => {
  const [formData, setFormData] = useState<AddressFormData>({
    firstName: "",
    lastName: "",
    address: "",
    aptNumber: "",
    state: "",
    zip: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="w-full min-h-fit flex justify-center items-start bg-gray-50 py-8 px-2">
      <div className="w-full p-4 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <MdArrowBackIos />
          <h1 className="text-lg sm:text-2xl font-semibold">
            Shipping Address
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full text-xs sm:text-sm md:text-base">
          {/* Form Section */}
          <div className="flex-1 min-w-0 flex flex-col border border-gray-300 rounded-lg p-4 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <FaRegDotCircle className="text-red-600 text-2xl" />
              <p className="text-lg sm:text-xl">Add New Address</p>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col flex-1">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-500 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full py-2 px-2 border border-gray-500 rounded-md"
              />
            </div>

            <div className="flex gap-2 mt-2">
              <div className="flex flex-col flex-1">
                <label htmlFor="aptNumber">Apt Number</label>
                <input
                  type="text"
                  id="aptNumber"
                  value={formData.aptNumber}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-500 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button className="w-full border border-black py-2 rounded-lg">
                cancel
              </button>
              <button className="w-full border border-black rounded-lg text-white bg-black py-2">
                Save This Address
              </button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="flex-1 min-w-0 bg-gray-100 rounded-lg p-4 flex flex-col gap-3 text-base">
            <p className="text-gray-600 mb-2 font-normal">
              By placing your order, you agree to our company{" "}
              <strong className="text-black font-normal">Privacy policy</strong>{" "}
              and{" "}
              <strong className="text-black font-normal">
                Conditions of use
              </strong>
            </p>

            <div className="border border-black border-b-0 w-full mb-2"></div>

            <h1 className="mb-2 font-medium text-start">Order Summary</h1>

            <div className="flex text-gray-600 w-full mb-2">
              <div className="flex-1 flex flex-col gap-2">
                <p>Items - Silhouette No. 1 - Vermilion</p>
                <p>Shipping</p>
                <p>Before tax:</p>
                <p>Tax Collected:</p>
              </div>
              <div className="text-right flex flex-col gap-2">
                <p>7,999</p>
                <p>200</p>
                <p>6,599</p>
                <p>1,400</p>
              </div>
            </div>

            <div className="border border-black border-b-0 w-full mb-2"></div>

            <div className="flex justify-between w-full mb-4">
              <h1 className="font-medium">Order Total:</h1>
              <h1>8,199</h1>
            </div>

            <button className="bg-black text-white w-full py-2 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
