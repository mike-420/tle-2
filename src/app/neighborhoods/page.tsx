import Neighborhoods from "@/components/Neighborhoods";
import { Bricolage_Grotesque } from "next/font/google";
import React from "react";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className={`pt-[74px] pb-11 flex flex-col gap-[18px] items-center justify-center text-center max-w-[674px] ${Gretesque.className} mx-auto`}
      >
        <h1 className="text-black font-medium leading-[53px] text-[40px]">
          Search Downtown Los Angeles Real Estate By Neighborhood
        </h1>
      </div>
      <Neighborhoods isPage={true} />
    </div>
  );
};

export default Page;
