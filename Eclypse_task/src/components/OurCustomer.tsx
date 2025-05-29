import { MdOutlineArrowLeft } from "react-icons/md";
import { assets } from "../assets/assets";

interface Customer {
  name: string;
  location: string;
  testimonial: string;
  image: string;
}

interface Avatar {
  src: string;
  alt: string;
  active?: boolean;
}

const customer: Customer = {
  name: "Random Woman",
  location: "NY, USA",
  testimonial:
    "Understated, but unforgettable. It\nfeels like it was made for me",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Cello_player.jpg/480px-Cello_player.jpg",
};

const avatars: Avatar[] = [
  {
    src: customer.image,
    alt: "Active",
    active: true,
  },
  {
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    alt: "Inactive 1",
  },
  {
    src: "https://randomuser.me/api/portraits/women/65.jpg",
    alt: "Inactive 2",
  },
];

const OurCustomer: React.FC = () => {
  return (
    <div className="w-full bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      <div className="flex flex-row items-center justify-between w-full max-w-[1280px]">
        <div className="flex-1 flex flex-col justify-center md:pl-4">
          <div className="text-[1.1vw] text-gray-400 tracking-[0.25em] mb-10 uppercase">
            OUR CUSTOMERS
          </div>

          <div className="flex items-start">
            <img
              src={assets.quotes}
              alt="Quote"
              className="w-[4vw] md:w-[3vw] lg:w-[2.2vw] max-w-[32px] mr-4 mt-[-0.2em] object-contain"
            />
            <div>
              <p className="text-[2.7vw] md:text-[2.2vw] lg:text-[2vw] font-light leading-tight text-zinc-200 mb-12 whitespace-pre-line">
                {customer.testimonial}
              </p>
              <div className="mt-12">
                <p className="text-[1.3vw] md:text-[1vw] text-zinc-300 mb-2">
                  {customer.name}
                </p>
                <p className="text-[1vw] md:text-[0.9vw] text-zinc-500">
                  {customer.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0 relative min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
          <div className="relative w-fit">
            <button
              className="absolute left-[-6vw] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-0 m-0"
              aria-label="Previous"
              tabIndex={0}
            >
              <MdOutlineArrowLeft className="text-white w-[6vw] h-[6vw] min-w-[24px] min-h-[24px]" />
            </button>
            <img
              src={avatars[0].src}
              alt={avatars[0].alt}
              className="w-[6vw] h-[6vw] max-w-[70px] max-h-[70px] rounded-full object-cover border-2 border-white"
            />
          </div>
          {avatars.slice(1).map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.alt}
              className="w-[3vw] h-[3vw] max-w-[40px] max-h-[40px] rounded-full object-cover opacity-60 border border-gray-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
