import ResidentialBuildingsSlider from "@/components/ResidentialBuildingsSlider";
import { Button } from "@/components/ui/button";
import { NeighborhoodInfo } from "@/helper/api";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const LoftCondosPage = async () => {
  const response = await fetch("https://tle-2.vercel.app/api/neighborhoods");

  const data = await response.json();
  const allBuildings = data.flatMap(
    (neighorhood: NeighborhoodInfo) => neighorhood.buildings
  );

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 bg-white my-16 max-sm:my-12 pb-28 ">
      <div
        className={` text-center max-w-[674px] ${SourceSans.className} mx-auto`}
      >
        <h1 className="sm:mt-4 text-black font-medium leading-[53px] text-[40px] max-sm:text-[28px] max-sm:leading-[38px] ">
          Downtown LA Lofts & Condos
        </h1>
      </div>
      <ResidentialBuildingsSlider
        allBuildings={allBuildings}
        buildingRows={3}
      />

      <div className="w-full flex items-center justify-center mt-32 ">
        <button
          className={`${SourceSans.className} text-lg bg-white text-black py-2.5 w-[400px] rounded-md border border-black
          hover:bg-black hover:text-white transition ease-in `}
        >
          <Link href="/southern-california-real-estate-search">
            Search all Southern California Real Estate
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LoftCondosPage;
