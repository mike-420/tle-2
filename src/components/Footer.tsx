import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <footer className=" py-[66px] bg-black min-h-[326px] flex ">
      <div className="flex md:flex-row md:gap-0 gap-20 max-md:gap-8 flex-col justify-between flex-1 max-w-screen-1440px mx-auto lg:pl-[106px] lg:pr-[270px] md:px-16 sm:px-12 px-4">
        <div className="flex flex-col justify-between">
          <Image
            src={"/footer.gif"}
            alt="The Loft Exchange Logo"
            width={140}
            height={78}
            className="max-md:w-[100px] max-md:h-[50px] "
          />
          <p className="text-white text-sm">© 2010 — 2020</p>
        </div>
        <div className="flex-1 flex md:justify-end lg:gap-20 md:gap-12 gap-10">
          <div className="flex flex-col gap-6">
            <h5 className="text text-white font-bold">Navigate</h5>
            <div className="flex flex-col gap-4">
              <a href="#" className="footer-link w-fit text-white text-sm">
                Buildings
              </a>
              <a href="#" className="footer-link w-fit text-white text-sm">
                Neighborhoods
              </a>
              <a href="#" className="footer-link w-fit text-white text-sm">
                Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
