import Script from "next/script";

const IdxPage = () => {
  return (
    <>
      <Script id="ihfKestrel-render" strategy="lazyOnload">
        {`document.currentScript.replaceWith(ihfKestrel.render());`}
      </Script>
    </>
  );
};

export default IdxPage;
