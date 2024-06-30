import { NeighborhoodInfo } from "@/helper/api";
import { Source_Sans_3 } from "next/font/google";
import React from "react";
import NeighborhoodCard from "./NeighborhoodCard";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Neighborhoods = async ({ isPage = false }: { isPage?: boolean }) => {
  const res = await fetch("https://tle-2.vercel.app/api/neighborhoods");
  const neighborhoods: NeighborhoodInfo[] = await res.json();

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 py-16 max-sm:py-12 ">
      {!isPage && (
        <h2
          className={`text-[32px] max-sm:mt-[6px] font-semibold leading-10 max-sm:text-[28px] text-black text-center ${SourceSans.className} `}
        >
          The Neighborhoods
        </h2>
      )}

      <div className="mt-16 max-sm:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-1 max-sm:gap-2">
        {neighborhoods.map((loc, index) => (
          <NeighborhoodCard {...loc} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
