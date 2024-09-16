<<<<<<< Updated upstream
import { services } from "../assets/constants/services";
function Services() {
  return (
    <div className="flex flex-wrap box-border justify-center gap-5 py-10">
      {services.map((service, index) => {
        return (
          <div
            className="p-4 rounded shadow-md min-w-500"
            style={{
              background: "#ffffff",
              width: "calc(50% - 10px)",
            }}
            key={index}
          >
            {service.svg("80px", "80px")}
            <h3 className="text-lg font-semibold my-5 border-b-2 border-red">
              {service.title}
            </h3>
            <p className="font-normal text-gray-500 text-sm">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
=======
import React from "react";
import { services } from "../assets/constants/services";

export default function Services() {
  return (
    <>
      <section
        id="featured-services"
        className="featured-services section flex items-center justify-center"
      >
        <div className="container">
          <div
            className="w-full grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {services.map((service, index) => (
              <div className="service-item item-cyan position-relative w-full">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
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
>>>>>>> Stashed changes
  );
}

export default Services;
