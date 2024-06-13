import { Source_Sans_3 } from "next/font/google";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Subscribe = () => {
  return (
    <section className="pt-[164px] pb-[122px] max-w-screen-1440px mx-auto flex items-center justify-center flex-col gap-3.5 sm:px-12 px-4">
      <h1
        className={`${SourceSans.className} font-light text-black text-[32px] leading-[45px]`}
      >
        Subscribe
      </h1>
      <h2 className={`${SourceSans.className} text-2xl text-black`}>
        Sign up with your email to receive listing updates.
      </h2>
      <div className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-[870px] gap-2.5 mx-auto">
          <input
            type="text"
            className={`border border-[#333333] bg-white text-[17px] leading-6 ${SourceSans.className} rounded-md font-light text-black py-2.5 px-[15px]`}
            placeholder="First Name"
          />
          <input
            type="text"
            className={`border border-[#333333] bg-white text-[17px] leading-6 ${SourceSans.className} rounded-md font-light text-black py-2.5 px-[15px]`}
            placeholder="Last Name"
          />
          <input
            type="text"
            className={`border border-[#333333] bg-white text-[17px] leading-6 ${SourceSans.className} rounded-md font-light text-black py-2.5 px-[15px]`}
            placeholder="Email Address"
          />
          <button
            className={`${SourceSans.className} uppercase py-2.5 border border-[#333333] bg-[#333333] rounded-md text-white font-light text-[17px] leading-6`}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
