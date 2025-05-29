import DropMenu from "./DropMenu";
import Footer from "./Footer";
import Hero from "./Hero";
import OurCustomer from "./OurCustomer";
import Product from "./Product";
import ProductList from "./ProductList";

const Body: React.FC = () => {
  return (
    <div className="bg-black flex flex-col gap-y-16 px-2 sm:px-8 md:px-12">
      <Hero />
      <div className="w-full sm:w-[70%] md:w-[50%] sm:my-7 py-3 sm:mt-12">
        <p className="text-white text-sm sm:text-xl md:text-3xl">
          Rooted in a philosophy of quiet luxury, our garments are designed to
          speak softly in cut, in movement, in presence.
        </p>
        <div className="max-w-fit my-1">
          <p className="text-white text-xs sm:text-sm">
            Learn more about Eclypse ↗️
          </p>
          <p className="border border-white border-bottom"></p>
        </div>
      </div>
      <ProductList />
      <p className="text-3xl text-white">Silhouette No. 1 – Vermilion</p>

      <Product />
      <DropMenu />
      <OurCustomer />
      <Footer />
    </div>
  );
};

export default Body;
