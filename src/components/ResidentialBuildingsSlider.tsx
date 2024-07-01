"use client";
import { createSlug } from "@/helper";
import { BuildingInfo } from "@/helper/api";
import { useWindowWidth } from "@react-hook/window-size";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BuildingCard = ({ building }: { building: BuildingInfo }) => {
  return (
    <Link
      href={`/neighborhoods/${createSlug(building.area)}/${createSlug(
        building.buildingName
      )}`}
      className="flex flex-col items-start justify-start gap-2 max-sm:gap-1"
    >
      <div className="relative overflow-hidden rounded-lg hover:scale-105 transition ease-in-out ">
        <Image
          src={building.buildingImage}
          alt={building.buildingName}
          width={400}
          height={165}
          className="object-cover h-[165px]"
        />
        <div className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none" />
      </div>
      <h4
        className={`text-black w-full text-center text-[1.1rem] max-sm:text-xs font-medium leading-[22px] cursor-pointer ${SourceSans.className}`}
      >
        {building.buildingName}
      </h4>
    </Link>
  );
};

type Props = {
  allBuildings: BuildingInfo[];
  buildingRows?: number;
};

const ResidentialBuildingsSlider = ({
  allBuildings,
  buildingRows = 2,
}: Props) => {
  const onlyWidth = useWindowWidth();
  const [buildings, setBuildings] = useState<BuildingInfo[]>([]);
  const [visibleBuildings, setVisibleBuildings] = useState<BuildingInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const buildingsPerPage =
    onlyWidth > 768 && onlyWidth < 1024
      ? 4 * buildingRows
      : onlyWidth < 768
      ? 10
      : 5 * buildingRows;

  useEffect(() => {
    setBuildings(allBuildings);
    setVisibleBuildings(allBuildings.slice(0, buildingsPerPage));
  }, [buildingsPerPage, allBuildings]);

  const handlePageChange = (newPage: number) => {
    if (isAnimating) return; // Prevent changing page while animation is running

    setSlideDirection(newPage > currentPage ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
      const start = newPage * buildingsPerPage;
      const end = start + buildingsPerPage;
      setVisibleBuildings(buildings.slice(start, end));
    }, 500); // Duration of the animation
  };

  const loadMoreBuildings = () => {
    const newVisibleCount = visibleBuildings.length + buildingsPerPage;
    setVisibleBuildings(buildings.slice(0, newVisibleCount));
  };

  return (
    <>
      <div className="flex flex-col gap-10 sm:gap-[97px] mt-16 max-sm:mt-8 ">
        <div className="relative">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 max-md:gap-x-2 gap-y-10 max-lg:gap-y-6 max-md:gap-y-4 transition-transform duration-500 transform  ${
              isAnimating
                ? slideDirection === "right"
                  ? "slide-out-left"
                  : "slide-out-right"
                : ""
            }`}
          >
            {visibleBuildings.map((building, index) => (
              <BuildingCard
                key={`${building.ihomefinderId}-building-${index}`}
                building={building}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 max-md:hidden ">
        {Array.from(
          { length: Math.ceil(buildings.length / buildingsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={` w-6 h-6 max-lg:w-5 max-lg:h-5 border-[1.2px] border-black rounded-full mx-2 ${
                index === currentPage ? "bg-black" : "bg-white"
              }`}
              onClick={() => handlePageChange(index)}
            />
          )
        )}
      </div>

      {visibleBuildings.length < buildings.length && (
        <div className="md:hidden w-full flex items-center justify-center mt-8 ">
          <Button
            className={`${SourceSans.className} font-medium text-base`}
            onClick={loadMoreBuildings}
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default ResidentialBuildingsSlider;
