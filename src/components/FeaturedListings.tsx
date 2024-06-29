"use client";
import { Source_Sans_3 } from "next/font/google";
import { useEffect } from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const FeaturedListings = () => {
  useEffect(() => {
    const widgetElement = document.getElementById("featured-listings");
    if (widgetElement) {
      widgetElement.replaceWith(
        window.ihfKestrel?.render({
          component: "gallerySliderWidget",
          rows: 1,
          navigation: true,
          nav: "top",
          auto: true,
          maxResults: 12,
          status: "active",
          featured: true,
          effect: "slide",
        })
      );
    }
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 py-16 max-sm:py-12 ">
      <h2
        className={`text-[26px] leading-9 text-black text-center ${SourceSans.className} `}
      >
        Featured Listings
      </h2>
      <div className="h-[563px] text-black py-16">
        <div id="featured-listings"></div>
      </div>
    </section>
  );
};

export default FeaturedListings;
