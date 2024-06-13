import React from "react";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const About = () => {
  return (
    <div className="max-w-screen-1440px mx-auto px-4 sm:px-12 md:px-16 lg:pl-[115px] lg:pr-[154px] pt-[73px] pb-[129px]">
      <div className="flex flex-col gap-11">
        <h1 className="text-[30px] leading-9 text-black uppercase">ABOUT</h1>
        <div className="flex gap-12 lg:gap-20 lg:flex-row flex-col items-center">
          <div className="flex gap-9 flex-col max-w-[675px] w-full">
            <h1 className="text-[44px] leading-[54px] text-black">
              Roxanna Godinez
            </h1>
            <p
              className={`font-light text-[28px] leading-[54px] text-black ${SourceSans.className}`}
            >
              This business is an organic business, changing, adapting and
              growing and experience is a key element and so it&apos;s
              knowledge. I can write a book about all the intricacies and
              moments experienced in helping so many wonderful clients with
              their real estate needs, so whether you&apos;re looking for your
              first place, downsizing, or you need an investment or second home,
              I am that real estate consultant you have been looking for quite
              some time.{" "}
            </p>
            <p className={`text-2xl text-black ${SourceSans.className}`}>
              Roxanna Godinez <br /> Realtor® <br /> Loftway <br /> Broker
              license #01897934
            </p>
          </div>
          <div className="flex flex-col gap-9 mt-14">
            <Image
              src={"/rox.jpeg"}
              alt="Roxanne"
              width={410}
              height={510}
              className="object-cover max-h-[510px]"
            />
            <button
              className={`text-[#555555] ${SourceSans.className} py-5 uppercase max-w-[411px] w-full flex items-center justify-center text-2xl leading-[30px] bg-white border border-[#CCCCCC] rounded-lg`}
            >
              Contact Roxanna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
