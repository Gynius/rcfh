import React from "react";
import { services } from "../assets/constants/services";

function Services() {
  return (
    <>
      <section
        id="featured-services"
        className="featured-services section flex items-center justify-center px-4"
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
  );
}

export default Services;
