"use client";
import Script from "next/script";

const Listing = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 py-16 max-sm:py-12 ">
      <h2 className={`text-[26px] leading-9 text-black text-center `}>
        Listings
      </h2>
      <div className="h-[563px] text-black py-16">
        <Script id="listing-script">
          {`document.currentScript.replaceWith(ihfKestrel.render());`}
        </Script>
      </div>
    </section>
  );
};

export default Listing;
