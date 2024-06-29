"use client";
import { Source_Sans_3 } from "next/font/google";
import React, { useEffect, useState } from "react";
import GreenLine from "./GreenLine";

const data = [
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner1.jpg",
  },
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner2.jpg",
  },
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner3.jpg",
  },
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner4.jpg",
  },
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner5.jpg",
  },
  {
    title: "Downtown Los Angeles Real Estate",
    image: "/slider/banner6.jpg",
  },
];

const SourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      showNextImage();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  function showNextImage() {
    setCurrentSlide((index) => {
      if (index === data?.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div className="relative w-full overflow-hidden">
      <GreenLine />
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[566px] max-sm:h-[420px] flex-shrink-0 bg-cover bg-center  "
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {currentSlide === index && (
              <div className="absolute left-1/2 -translate-x-1/2 max-sm:top-8 top-10">
                <h4
                  className={`${SourceSans.className} min-w-[200px] w-full text-3xl max-sm:text-2xl text-white capitalize leading-10 text-center`}
                >
                  {slide.title}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>
      <GreenLine />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-5">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={showNextImage}
            className={`w-6 h-6 max-sm:w-5 max-sm:h-5 max-lg:h-6 max-lg:w6 rounded-full border border-[#8c9940] ${
              currentSlide === index ? "bg-[#8C9940]" : "bg-[#E8E8E8]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
