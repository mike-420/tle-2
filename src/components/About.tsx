import React from "react";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 md:px-16 py-16 max-sm:py-12 ">
      <div className="flex flex-col gap-11">
        <div className="flex max-sm:gap-[2.4rem] gap-12 lg:gap-20 max-lg:flex-col items-center justify-center ">
          <div className="flex gap-9 max-sm:gap-[0.6rem] flex-col max-w-[650px] w-full flex-1">
            <h2
              className={`${SourceSans.className} text-[44px] max-sm:font-medium max-lg:text-center leading-[55px] text-black`}
            >
              About Me
            </h2>
            <p
              className={` font-light lg:mt-3 text-[23px] max-sm:text-[20px] max-sm:leading-[38px] leading-[48px] max-lg:text-center text-black ${SourceSans.className}`}
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

            <div
              className={` ${SourceSans.className}  text-xl max-sm:text-base max-lg:text-center font-semibold space-y-1 `}
            >
              <p>Roxanna Godinez</p>
              <p>Realtor®</p>
              <p>Loftway</p>
              <p>Broker license #01897934</p>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <Image
              src={"/rox.jpeg"}
              alt="Headshot of Roxanna Godinez"
              width={410}
              height={600}
              className="object-cover max-h-[550px] max-sm:h-[280px] rounded-lg"
            />
            <button
              className={`text-[#555555] ${SourceSans.className} py-5 max-sm:py-[1.1rem] max-sm:text-[1.4rem] uppercase w-full flex items-center justify-center text-2xl leading-[30px] bg-white border border-[#888888] rounded-lg`}
            >
              <Link href="/contact">Contact Roxanna</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
