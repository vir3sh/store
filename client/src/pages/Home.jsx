import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import LatestRelease from "../components/LatestRelease";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestRelease />
      <BestSeller />
    </div>
  );
};

export default Home;
