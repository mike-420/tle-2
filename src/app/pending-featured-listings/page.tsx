"use client";

import React, { useEffect } from "react";

const PendingFeaturedListingPage = () => {
  useEffect(() => {
    const targetElement = document.getElementById(
      "pending-featured-listing-script"
    );

    if (targetElement) {
      // Function to execute the inline script
      const executeScript = () => {
        if (window.ihfKestrel) {
          targetElement.replaceWith(window.ihfKestrel.render());
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
                  const targetElement = document.getElementById('pending-featured-listing-script');
                  if (targetElement) {
                    targetElement.replaceWith(window.ihfKestrel.render());
                  }
                } else {
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
    <div className="my-16 min-h-[60vh] max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 bg-white ">
      <div id="pending-featured-listing-script"></div>
    </div>
  );
};

export default PendingFeaturedListingPage;
