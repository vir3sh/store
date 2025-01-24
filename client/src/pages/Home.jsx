import Hero from "../components/Hero";
import LatestRelease from "../components/LatestRelease";
import BestSeller from "../components/BestSeller";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestRelease />
      <BestSeller />
      <NewsLetter />
    </div>
  );
};

export default Home;
