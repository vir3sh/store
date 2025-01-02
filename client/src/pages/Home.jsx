import { useState } from "react";
import mainpageboy from "../assets/mainpage.jpg";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import NewsLetter from "../components/NewsLetter";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <NewsLetter />
    </div>
  );
}

export default Home;
