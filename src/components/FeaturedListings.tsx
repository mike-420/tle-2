"use client";
import { Source_Sans_3 } from "next/font/google";
import { useEffect } from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const FeaturedListings = () => {
  useEffect(() => {
    const targetElement = document.getElementById("featured-listings");

    if (targetElement) {
      // Function to execute the inline script
      const executeScript = () => {
        if (window.ihfKestrel) {
          targetElement.replaceWith(
            window.ihfKestrel.render({
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
        } else {
          setTimeout(executeScript, 100);
        }
      };

      // Create a script element
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        (function() {
          const checkIhfKestrel = () => {
            if (window.ihfKestrel) {
              const targetElement = document.getElementById('featured-listings');
              if (targetElement) {
                targetElement.replaceWith(
                  window.ihfKestrel.render({
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
            } 
              else {
              setTimeout(checkIhfKestrel, 100);
            }
          };
          checkIhfKestrel();
        })();
      `;

      // Append the script to the target div
      targetElement.appendChild(script);

      // Cleanup function
      const cleanup = () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };

      // Register the cleanup function
      return cleanup;
    }
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 max-sm:pt-[1.8rem] max-sm:py-[1.8rem] py-16  ">
      <h2
        className={`text-[26px] max-sm:text-[21px] leading-9 text-black text-center ${SourceSans.className} `}
      >
        Featured Listings
      </h2>
      <div className="h-[500px] text-black py-16  ">
        <div id="featured-listings"></div>
      </div>
    </section>
  );
};

export default FeaturedListings;
