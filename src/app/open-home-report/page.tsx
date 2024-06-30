"use client";
import Script from "next/script";

const OpenHomeReport = () => {
  return (
    <>
      <Script id="open-home-report-script">
        {`document.currentScript.replaceWith(ihfKestrel.render());`}
      </Script>
    </>
  );
};

export default OpenHomeReport;
