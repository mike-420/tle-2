import Image from "next/image";
import Link from "next/link";
import React from "react";

const navData = ["Residential Buildings", "Neighborhoods", "About", "Contact"];

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="w-full flex items-center justify-between h-[100px] max-w-screen-1440px px-4 sm:px-6 lg:px-10  gap-10 ">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={140}
            height={78}
            className="max-md:w-[100px] max-md:h-[50px] "
          />
        </Link>
        <div className="lg:w-3/4 md:flex items-center justify-end h-full gap-12 w-full hidden">
          {navData.map((nav, index) => {
            return (
              <Link
                href={`/${nav.toLowerCase()}`}
                className="lg:text-xl text-lg lg:leading-6 text-center text-black"
                key={index}
              >
                {nav}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
