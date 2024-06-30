"use client";
import Image from "next/image";
import Link from "next/link";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { usePathname } from "next/navigation";

const navData = [
  {
    name: "Search",
    href: "downtown-la-lofts-condos-for-sale",
  },
  {
    name: "Neighborhoods",
    href: "neighborhoods",
  },
  {
    name: "Blog",
    href: "blog",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Gretesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skipVisible, setSkipVisible] = useState(false);
  const [tabCount, setTabCount] = useState(0);

  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleTabPress = (event: KeyboardEvent<Document>) => {
      if (event.key === "Tab") {
        setTabCount((prevTabCount) => prevTabCount + 1);
        if (tabCount === 0) {
          setSkipVisible(true);
        } else if (tabCount === 1) {
          setSkipVisible(false);
          document.getElementById("logo")?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabPress as any);

    return () => {
      document.removeEventListener("keydown", handleTabPress as any);
    };
  }, [tabCount]);

  const handleSkipFocus = () => {
    setSkipVisible(true);
  };

  const handleSkipBlur = () => {
    setSkipVisible(false);
  };

  const handleSkipEnter = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      // Move the page down by 150px
      window.scrollBy({
        top: 150,
        behavior: "smooth", // Optional: smooth scrolling animation
      });

      // Optionally, focus on a specific element after scrolling
      document.getElementById("facebook-icon")?.focus();

      event.preventDefault();
    }
  };

  return (
    <header className="w-full bg-white max-w-[1440px] mx-auto ">
      <div className="relative w-full flex justify-between max-md:h-[80px] h-[100px] px-4 sm:px-6 lg:px-14 gap-10">
        <button
          className={`skip-to-content ${skipVisible ? "visible" : ""}`}
          tabIndex={1}
          id="skip-to-content"
          onFocus={handleSkipFocus}
          onBlur={handleSkipBlur}
          onKeyDown={handleSkipEnter}
        >
          Skip to content
        </button>
        <Link
          href="/"
          className="flex justify-center items-center "
          tabIndex={-1}
        >
          <Image
            id="logo"
            src={"/logo.png"}
            alt="The Loft Exchange logo"
            width={140}
            height={70}
            className="max-md:w-[100px] max-md:h-[60px]"
            tabIndex={2}
          />
        </Link>
        <nav className="md:flex items-end pb-3 justify-end h-full  max-lg:gap-8 gap-12 w-full hidden">
          {navData.map((item, index) => {
            const isActive = pathname === `/${item.href}`;
            return (
              <Link
                href={`/${item.href}`}
                className={`${
                  SourceSans.className
                } lg:text-xl text-base lg:leading-6 text-center text-black p-2 ${
                  isActive ? " underline underline-offset-2 " : ""
                } transition hover:underline hover:underline-offset-2 `}
                key={index}
                tabIndex={3 + index}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div
          className="hidden max-md:flex cursor-pointer"
          onClick={handleMenuClick}
        >
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger-menu"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Mobile nav when menu is open */}
      {isMenuOpen && (
        <nav
          className={`border-b bg-white py-4 pb-8 flex flex-col items-center justify-center gap-4 text-black ${Gretesque.className} transform transition-transform duration-300 ease-out`}
        >
          {navData.map((item, index) => (
            <li className="list-none" key={index}>
              <Link href={`/${item.href}`}>{item.name}</Link>
            </li>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
