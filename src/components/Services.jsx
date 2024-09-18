import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../assets/constants/services";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
    <>
      <section
        id="featured-services"
        className="featured-services section flex items-center justify-center py-16"
      >
        <div className="container px-8">
          <div
            className="w-full grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {services.map((service, index) => (
              <div className="service-item item-orange position-relative w-full">
                <div className="icon">{service.svg}</div>
                <a href="service-details.html" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
