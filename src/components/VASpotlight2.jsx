import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vaSpotlights from "../assets/constants/va_spotlight";
function VASpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
    }, 10000); // Change the slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vaSpotlights.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
  };

  const itemsToShow = [
    vaSpotlights[currentIndex], // Center item
  ];

  return (
    <section className="spotlight-container flex flex-col w-full justify-center items-center relative h-full bg-cover pt-10 pb-20">
      <h2 className="w-4/5 text-left text-4xl lg:text-6xl font-roboto mb-4 font-extrabold tracking-tight leading-none text-green">
        OUR TOP PERFORMER FOR THE MONTH
      </h2>
      <div className=" w-4/6 border flex relative justify-center my-20">
        {itemsToShow.map((spotlight, index) => (
          <div
            key={index}
            className=" center w-full shadow-2xl flex flex-col lg:flex-row p-10 text-white bg-va_bg bg-cover bg-right justify-center items-center rounded-2xl"
          >
            <div className="left flex flex-col w-2/3 items-center justify-center gap-2  ">
              <img
                src={spotlight.image}
                alt={spotlight.name}
                className="h-72	 object-cover rounded-full aspect-square border-4 border-white align-middle"
              />
              <h3 className="font-playfair font-extrabold text-center text-2xl">
                {spotlight.name}
              </h3>
              <h4 className="font-robotoCondensed text-sm text-center pb-2 text-gray-300">
                {spotlight.title}
              </h4>
            </div>
            <div className="right text-left h-auto ">
              <h2 className="w-full text-center text-4xl lg:text-4xl font-playfair mb-4 font-extrabold tracking-tight leading-none  w-100 flex flex-col items-center gap-2">
                VA Spotlight
                <span className="w-20 border-2 border-green_dark"></span>
              </h2>
              <div className="font-roboto px-5 text-sm text-gray-300 ">
                {spotlight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev text-green" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className="carousel-button next text-green" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </section>
  );
}

export default VASpotlight;
