import React, { useEffect, useState } from "react";
import vaSpotlights from "../assets/constants/va_spotlight";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function VASpotlightLayout() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
    }, 10000); // Change the slide every 10 seconds

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

  const itemsToShow = [vaSpotlights[currentIndex]];

  return (
    <section className="w-full flex items-center justify-center flex-col mb-20">
      <div className="w-4/5">
        <h2 className="text-center font-playfair text-4xl font-bold text-green tracking-tight leading-none py-10">
          OUR TOP PERFORMER FOR THE MONTH
        </h2>
      </div>
      <div className="w-4/5 ">
        {itemsToShow.map((spotlight, index) => {
          return (
            <div key={index} className="flex flex-col gap-10 items-center">
              <div className="w-full flex min-h-[400px] relative flex-col items-center 2xl:flex-row">
                <button
                  className="carousel-button prev text-green text-6xl"
                  onClick={handlePrev}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="carousel-button next text-green text-6xl"
                  onClick={handleNext}
                >
                  <FaChevronRight />
                </button>
                <div className="w-[50%] flex items-center justify-center">
                  <div className="border-8 border-red aspect-square w-[100%] rounded-full flex items-center justify-center relative">
                    <div
                      id="circle"
                      className="w-[40%] aspect-square rounded-full bg-green absolute -left-20 -top-5"
                    >
                      <div className="w-[90%] aspect-square rounded-full bg-green_light right-0 bottom-0 absolute"></div>
                    </div>
                    <div
                      id="circle"
                      className="w-[20%] aspect-square rounded-full bg-green absolute -right-10 -bottom-5"
                    >
                      <div className="w-[80%] aspect-square rounded-full bg-green_light left-0 top-0 absolute"></div>
                    </div>
                    <div
                      id="circle"
                      className="w-[30%] aspect-square rounded-full bg-green absolute -right-0 -top-5"
                    >
                      <div className="w-[90%] aspect-square rounded-full bg-green_light left-0 bottom-0 absolute"></div>
                    </div>
                    <div
                      id="circle"
                      className="w-[25%] aspect-square rounded-full bg-green absolute -left-0 -bottom-5"
                    >
                      <div className="w-[90%] aspect-square rounded-full bg-green_light right-0 top-0 absolute"></div>
                    </div>
                    <div
                      id="image"
                      className="w-[90%] aspect-square rounded-full z-10"
                      style={{
                        backgroundImage: `url(${spotlight.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: `${spotlight.position}`,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  id="content"
                  className="w-full flex flex-col items-center justify-center p-5"
                >
                  <div className="w-full flex items-center justify-center gap-5 py-2">
                    <h3 className="w-[75%] text-3xl text-green font-bold font-playfair py-5 text-right 2xl:text-6xl">
                      {spotlight.name}
                    </h3>
                    <span className="w-[70%] border-4 border-red h-1 italic text-center">
                      <p className="py-1">{spotlight.title}</p>
                    </span>
                  </div>
                  <div className="w-full flex justify-end items-right text-sm 2xl:text-base justify-center">
                    <p className="w-[90%] text-justify text-sm md:text-base">
                      {spotlight.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[80%] flex bg-va_bg text-white flex-col">
                <div
                  id="left"
                  className="border text-xl font-extrabold font-roboto p-5"
                >
                  This is the feedback from client
                </div>
                <div
                  id="right"
                  className="bg-gray-800 bg-opacity-50 w-full p-5 italic text-center text-sm 2xl:text-base"
                >
                  "{spotlight.clientFeedback}"
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default VASpotlightLayout;
