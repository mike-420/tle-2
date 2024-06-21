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
    <Link href={`/neighborhoods/${link}`}>
      <article
        className={`h-[300px] relative flex items-center justify-center overflow-hidden ${SourceSans.className}`}
      >
        <img
          src={banner}
          alt={neighborhood}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="bg-black/60 w-full h-full absolute inset-0" />
        <p className="text-white relative z-10 text-[38px] leading-[48px]">
          {neighborhood}
        </p>
      </article>
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
    <section className="flex flex-col gap-[54px]">
      {!isPage && (
        <h1 className="text-[32px] leading-10 text-black text-center mt-10">
          The Neighborhoods
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3px] w-full">
        {neighborhoods.map((loc, index) => (
          <NeighborhoodCard {...loc} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Neighborhoods;
