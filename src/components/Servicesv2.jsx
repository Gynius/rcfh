import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../assets/constants/services";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section
        id="featured-services"
        className="featured-services section items-center justify-center mb-10 z-5 relative"
      >
        <div className="w-full">
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 w-full services-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {services.map((service, index) => (
              <div
                className="service-item item-orange position-relative w-full p-0 grid grid-cols-1 grid-rows-[auto,auto,1fr] group relative justify-items-center items-center py-36 px-8 gap-5 "
                key={index}
              >
                <div className="icon row-span-1 group-hover:z-10 flex items-center justify-center w-20 h-20 text-red rounded-full group-hover:text-white ">
                  {service.svg}
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-5"></div>
                <h3 className="font-playfair font-bold text-3xl flex-1 group-hover:text-white z-10 m-0 p-0 text-center w-full">
                  {service.title}
                </h3>
                <p className="text-roboto m-0 text-gray-600 row-span-2 group-hover:text-gray-200 z-10 m-0 p-0 text-base text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
