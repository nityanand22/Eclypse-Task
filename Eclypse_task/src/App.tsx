import "./App.css";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import ShippingAddress from "./components/ShippingAddress";
import Wishlist from "./components/Wishlist";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/shipping-address" element={<ShippingAddress />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
