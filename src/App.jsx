import { Suspense } from "react";
import "./App.css";
import Achievement from "./Components/Achievement/Achievement";
import Banner from "./Components/Banner/Banner";
import DigitalTools from "./Components/DigitalTools/DigitalTools";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";

// Fetching Products data from the public folder
const fetchProducts = async () => {
  const productsRes = await fetch("/Products.json");
  return productsRes.json();
};

const productsResponse = fetchProducts();

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <Achievement />

      <DigitalTools productsResponse={productsResponse} />

      <GetStarted />

      <Pricing />

      <Footer />
    </>
  );
}

export default App;
