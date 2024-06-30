import NeighborhoodCard from "@/components/NeighborhoodCard";
import { NeighborhoodInfo } from "@/helper/api";
import { Bricolage_Grotesque } from "next/font/google";
import React from "react";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function NeighborhoodPage() {
  const res = await fetch("https://tle-2.vercel.app/api/neighborhoods");
  const neighborhoods: NeighborhoodInfo[] = await res.json();

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 bg-white my-16 max-sm:my-12 pb-28 ">
      <div
        className={` text-center max-w-[674px] ${Gretesque.className} mx-auto`}
      >
        <h1 className="sm:mt-4 text-black font-medium leading-[53px] text-[40px] max-sm:text-[28px] max-sm:leading-[38px] ">
          Search Downtown Los Angeles Real Estate By Neighborhood
        </h1>
      </div>
      <div className="mt-16 max-sm:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-1 max-sm:gap-2">
        {neighborhoods.map((loc, index) => (
          <NeighborhoodCard {...loc} key={index} />
        ))}
      </div>
    </div>
  );
}
