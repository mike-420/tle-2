"use client";
import Script from "next/script";

const page = () => {
  return (
    <>
      <Script id="search-script">
        {`document.currentScript.replaceWith(ihfKestrel.render());`}
      </Script>
    </>
  );
};

export default page;
