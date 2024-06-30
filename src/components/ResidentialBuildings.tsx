import { NeighborhoodInfo } from "@/helper/api";
import { Source_Sans_3 } from "next/font/google";
import React from "react";
import ResidentialBuildingsSlider from "./ResidentialBuildingsSlider";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ResidentialBuildings = async () => {
  const response = await fetch("https://tle-2.vercel.app/api/neighborhoods");

  const data = await response.json();
  const allBuildings = data.flatMap(
    (neighorhood: NeighborhoodInfo) => neighorhood.buildings
  );

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 py-16 max-sm:py-12 overflow-hidden">
      <div>
        <h2
          className={`${SourceSans.className} font-semibold text-[32px] max-sm:text-[26px] leading-8 text-center`}
        >
          The Downtown LA Buildings I Specialize In
        </h2>

        <ResidentialBuildingsSlider allBuildings={allBuildings} />
      </div>
    </section>
  );
};

export default ResidentialBuildings;
