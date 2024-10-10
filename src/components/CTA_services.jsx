import React from "react";

function CTA_services() {
  return (
    <section
      id="call-to-action"
      className="call-to-action bg-gradient-to-b from-green_light to-white text-black flex align-center justify-center font-serif"
    >
      <div className="container flex flex-col md:flex-row">
        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="md:w-3/4">
            <h2
              className="font-playfair text-center text-white font-extrabold
              text-4xl lg:text-5xl py-8"
            >
              Start your Journey With Us
            </h2>
            <p className="font-playfair text-center text-lg md:text-2xl text-6xl py-2">
              With our help, you can streamline your processes, increase
              productivity, and achieve your goals faster.
            </p>
          </div>
          <div className="flex justify-center items-center p-4 w-full">
            <a
              className="font-roboto cta-btn hover:bg-red hover:text-white align-middle text-lg md:text-xl text-black"
              href="https://calendly.com/kathy-rcfhagency/60min"
            >
              Book A Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA_services;
