"use client";
import { NeighborhoodInfo } from "@/helper/api";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const NeighborhoodCard = ({ neighborhood, banner }: NeighborhoodInfo) => {
  const link = neighborhood.toLowerCase().replace(/\s+/g, "-");
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <Link
      href={`/neighborhoods/${link}`}
      className={`h-[300px] w-full rounded-lg relative flex items-center justify-center overflow-hidden ${SourceSans.className}`}
    >
      <img
        src={banner}
        alt={neighborhood}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="bg-black/60 w-full h-full absolute inset-0" />
      <p className="text-white relative z-10 text-[38px] max-sm:text-[30px] hover:underline text-center leading-[48px] cursor-pointer ">
        {neighborhood}
      </p>
    </Link>
  );
};

const Neighborhoods = ({ isPage = false }: { isPage?: boolean }) => {
  const [neighborhoods, setNeighborhoods] = useState<NeighborhoodInfo[]>([]);

  useEffect(() => {
    const fetchNeighborhoodData = async () => {
      const res = await fetch("/api/neighborhoods");
      if (res.ok) {
        const data = await res.json();
        setNeighborhoods(data);
      }
    };

    fetchNeighborhoodData();
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-12 md:px-16 py-16 max-sm:py-12 ">
      {!isPage && (
        <h2
          className={`text-[32px] font-semibold leading-10 max-sm:text-[28px] text-black text-center ${SourceSans.className} `}
        >
          The Neighborhoods
        </h2>
      )}

      <div className="mt-16 max-sm:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center gap-1 max-sm:gap-2">
        {neighborhoods.map((loc, index) => (
          <NeighborhoodCard {...loc} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
