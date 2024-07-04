"use client";

import { Source_Sans_3 } from "next/font/google";
import React, { useEffect } from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const LoginPage = () => {
  useEffect(() => {
    const targetElement = document.getElementById("login-script");

    if (targetElement) {
      // Function to execute the inline script
      const executeScript = () => {
        if (window.ihfKestrel) {
          targetElement.replaceWith(
            window.ihfKestrel.render({
              component: "loginWidget",
              style: "twoline",
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
                  const targetElement = document.getElementById('login-script');
                  if (targetElement) {
                    targetElement.replaceWith(window.ihfKestrel.render({
                        "component": "loginWidget",
                        "style": "twoline"
                    }));
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
      <h1
        className={`${SourceSans.className} text-4xl font-semibold w-full text-center mb-6 `}
      >
        Login to your account
      </h1>
      <div id="login-script"></div>
    </div>
  );
};

export default LoginPage;
