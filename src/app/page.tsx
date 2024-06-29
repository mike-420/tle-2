import FeaturedListings from "@/components/FeaturedListings";
import About from "../components/About";
import Blog from "../components/Blog";
import Neighborhoods from "../components/Neighborhoods";
import ResidentialBuildings from "../components/ResidentialBuildings";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="bg-white min-h-screen pb-16">
      <Slider />
      <div className="mt-[68px] flex flex-col items-center gap-10">
        <h1 className="text-4xl leading-10 text-black text-center">
          Welcome to the <br /> neighborhood!
        </h1>
      </div>
      <FeaturedListings />
      <About />
      <ResidentialBuildings />
      <Neighborhoods />
      <Blog />
      <Subscribe />
    </div>
  );
}
