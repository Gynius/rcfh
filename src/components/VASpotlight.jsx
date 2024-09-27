import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function VASpotlight() {
  const vaSpotlights = [
    {
      image: "/images/team/jess-op.png",
      name: "Jessica Taufmann",
      title: "Outbound Services Director/Trainer",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      image: "/images/team/logan.jpg",
      name: "Logan Welch",
      title: "VA Services Director/Trainer",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      image: "/images/team/team-3.jpg",
      name: "Someone Else",
      title: "Another Role",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      image: "/images/team/team-4.jpg",
      name: "Another Person",
      title: "Different Role",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vaSpotlights.length);
    }, 5000); // Change the slide every 5 seconds

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
    vaSpotlights[
      (currentIndex + vaSpotlights.length - 1) % vaSpotlights.length
    ], // Previous item
    vaSpotlights[currentIndex], // Center item
    vaSpotlights[(currentIndex + 1) % vaSpotlights.length], // Next item
  ];

  return (
    <section className="spotlight-container flex flex-col w-full justify-center items-center relative py-20">
      <h2 className="w-4/5 text-center text-6xl font-playfair mb-4  font-extrabold tracking-tight leading-none text-green mb-10">
        VA Spotlights
      </h2>
      <div className="carousel  w-4/5 flex relative my-20 justify-center ">
        {itemsToShow.map((spotlight, index) => (
          <div
            key={index}
            className={`spotlight-item ${
              index === 1 ? "center" : "side"
            } flex-col w-4/5`}
          >
            <img
              src={spotlight.image}
              alt={spotlight.name}
              className="h-auto object-cover lg:w-3/5 rounded-lg aspect-square w-full "
            />
            <div className="right text-left">
              <h3 className="font-playfair font-extrabold text-center text-2xl">
                {spotlight.name}
              </h3>
              <h4 className="font-robotoCondensed text-sm text-center pb-2 text-gray-500">
                {spotlight.title}
              </h4>
              <p className=" font-roboto text-center text-base">
                {spotlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev absolute" onClick={handlePrev}>
        <FaArrowLeft />
      </button>
      <button className="carousel-button next absolute" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </section>
  );
}

export default VASpotlight;
