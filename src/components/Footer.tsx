import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const footerLinks = [
  {
    name: "Lofts & Condos",
    href: "/lofts-condos",
  },
  {
    name: "Neighborhoods",
    href: "/neighborhoods",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="  py-16 pb-[1.1rem] max-sm:py-12 bg-black min-h-[326px] flex ">
      <div className="flex md:flex-row md:gap-0 gap-20 max-md:gap-8 flex-col justify-between flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col gap-4 justify-between">
          <Image
            src={"/footer.gif"}
            alt="The Loft Exchange Logo"
            width={140}
            height={78}
            className="max-md:w-[125px] max-md:h-[75px] object-cover "
          />
          <p className="text-white text-[0.95rem]">
            © {new Date().getFullYear()}
          </p>
        </div>
        <div
          className={` ${SourceSans.className}  flex-1 flex md:justify-end lg:gap-20 md:gap-12 gap-10`}
        >
          <div className="flex flex-col gap-6">
            <h5 className="text-[1.15rem] text-white font-bold">Navigate</h5>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link transition hover:underline nav-underline w-fit text-white text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
