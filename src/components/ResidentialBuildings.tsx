import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BuildingCard = () => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-[293px]">
      <div className="relative">
        <Image
          src={"/res1.jpeg"}
          alt="Residential"
          width={251}
          height={165}
          className="object-cover max-h-[165px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/60 pointer-events-none" />
      </div>
      <div className="px-4 py-[18px] bg-white flex flex-col flex-1 justify-between">
        <h2
          className={`text-black text-lg leading-[22px] ${SourceSans.className}`}
        >
          The El Dorado Lofts
        </h2>
        <p className={`text-black leading-5 ${SourceSans.className}`}>
          Historic Core
        </p>
      </div>
    </div>
  );
};

const ResidentialBuildings = () => {
  return (
    <div className="bg-[#D9D9D9] py-[66px]">
      <section className="max-w-screen-1440px mx-auto px-4 sm:px-12 lg:px-16 lg:pb-[145px] pb-28">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[#333333] font-bold text-[26px] leading-8 text-center">
            The Downtown Residential Buildings I Specialize In
          </h1>
          <div className="flex flex-col gap-10 sm:gap-[97px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-20">
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
              <BuildingCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialBuildings;
