import About from "../components/About";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

import Neighborhoods from "../components/Neighborhoods";
import ResidentialBuildings from "../components/ResidentialBuildings";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Slider />
      <div className="mt-[68px] mb-[61px] flex flex-col items-center gap-10">
        <h2 className="text-4xl leading-10 text-black text-center">
          Welcome to the <br /> neighborhood!
        </h2>
        <h6 className="text-[26px] leading-9 text-black text-center">
          Featured Listings
        </h6>
      </div>
      <div className="h-[563px] text-black">ihomefinder</div>
      <About />
      <ResidentialBuildings />
      <Neighborhoods />
      <Blog />
      <Subscribe />
    </div>
  );
}
