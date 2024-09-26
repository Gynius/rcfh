import React, { useEffect, useState } from "react";

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
      image: "/images/team/someone-3.jpg",
      name: "Someone Else",
      title: "Another Role",
      description:
        "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      image: "/images/team/someone-4.jpg",
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
    }, 1000000); // Change the slide every 5 seconds

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
    <section className="spotlight-container flex flex-col w-full  justify-center items-center relative 2-4 py-20">
      <h1 className="text-center text-6xl">VA Spotlights</h1>
      <div className="carousel  w-4/5 flex relative my-20 h-96">
        {itemsToShow.map((spotlight, index) => (
          <div
            key={index}
            className={`spotlight-item ${index === 1 ? "center" : ""} `}
          >
            <img src={spotlight.image} alt={spotlight.name} />
            <div className="right text-left">
              <h3>{spotlight.name}</h3>
              <h4>{spotlight.title}</h4>
              <p>{spotlight.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev absolute" onClick={handlePrev}>
        Prev
      </button>
      <button className="carousel-button next absolute" onClick={handleNext}>
        Next
      </button>
    </section>
  );
}

export default VASpotlight;
