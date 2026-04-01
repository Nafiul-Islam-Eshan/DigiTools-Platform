import { Suspense, useState } from "react";
import "./App.css";
import Achievement from "./Components/Achievement/Achievement";
import Banner from "./Components/Banner/Banner";
import DigitalTools from "./Components/DigitalTools/DigitalTools";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Cart from "./Components/DigitalTools/Cart";
import Header from "./Components/DigitalTools/Header";
import Tabs from "./Components/DigitalTools/Tabs";

// Fetching Products data from the public folder
const fetchProducts = async () => {
  const productsRes = await fetch("/Products.json");
  return productsRes.json();
};

const productsResponse = fetchProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cards, setCards] = useState([]);

  return (
    <>
      <Navbar cards={cards} />

      <Banner />

      <Achievement />

      <Header />

      <Tabs setActiveTab={setActiveTab} cards={cards} />

      { activeTab==="product" && <DigitalTools productsResponse={productsResponse} cards={cards} setCards={setCards} />}

      {activeTab==="cart" && <Cart cards={cards} setCards={setCards} /> }

      <GetStarted />

      <Pricing />

      <Footer />
    </>
  );
}

export default App;
