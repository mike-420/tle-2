import Blog from "@/components/Blog";
import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Page = () => {
  return (
    <section className={`bg-white w-full ${Gretesque.className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 md:px-16 py-[70px] flex flex-col min-h-screen gap-72 justify-between border-t">
        <div className="flex flex-col items-center">
          <h1
            className={`text-black font-medium text-5xl max-w-[888px] text-center leading-[68px]`}
          >
            Your Guide to Shopping, Eating, and Drinking in DTLA&apos;s Stylish
            Arts District
          </h1>
          <div className="mt-[30px]">
            <button className="px-7 text-center bg-[#E3F6F4] rounded-md font-light leading-9 text-black">
              Arts District
            </button>
          </div>
          <div className="mt-5">
            <span className="font-light text-black leading-[45px] text-[32px]">
              June 24, 2022
            </span>
          </div>
          <div className="max-w-[1036px] mx-auto w-full mt-9">
            <Image
              src="/slider/banner1.jpg"
              alt="Article"
              width={1036}
              height={580}
              className="max-h-[580px]"
            />
          </div>
          <div className="mt-16">
            <p className="font-light text-black text-[1.1rem] leading-[45px] max-w-[844px]">
              Downtown Los Angeles is booming, from Little Tokyo, to the Fashion
              District, to the Arts District. The latter encompasses three
              square miles on DTLA’s east side. Since the late 2000s, the area
              has changed, becoming a trendy locale, complete with museums and
              cafes, creative workspaces and lofts, and boutique restaurants.
              More development, apparently, is to come, with The Real Deal
              pointing out that “there’s nearly one major project in the
              pipeline for every two blocks of Downtown’s Arts District.” <br />{" "}
              <br /> Though gentrification can be welcome in many cases, some
              wonder if current and future real estate projects could cause the
              Arts District to lose its artists — and its character.
            </p>
          </div>
        </div>
        <Blog noTitle={true} />
      </div>
    </section>
  );
};

export default Page;
