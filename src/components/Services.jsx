import React from "react";

export default function Services() {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item item-cyan position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>VA Services</h3>
              </a>
              <p>
                Streamline your operations and reclaim valuable time with our
                Virtual Assistant Services. Our dedicated team of virtual
                assistants is adept at handling administrative tasks, managing
                schedules, and executing a wide range of operational
                responsibilities. Focus on what matters most while we handle the
                rest.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item item-orange position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>VA Staffing</h3>
              </a>
              <p>
                Finding the right talent for your team just got easier with our
                Virtual Assistant Staffing services. We match your business
                needs with skilled professionals who seamlessly integrate into
                your operations. Whether you require short-term support or
                long-term collaboration, our virtual assistant staffing ensures
                a perfect fit for your organizational requirements.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item item-teal position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Outbound Messaging</h3>
              </a>
              <p>
                Elevate your brand's communication strategy with our Outbound
                Messaging services. From targeted marketing campaigns to
                personalized customer outreach, we craft compelling messages
                that resonate with your audience. Enhance your brand presence,
                foster customer relationships, and drive meaningful engagement
                with our expert outbound messaging solutions.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item item-red position-relative">
              <div className="icon">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Consulting </h3>
              </a>
              <p>
                Navigate the complexities of business with confidence through
                our Consulting services. We bring a wealth of industry knowledge
                to the table, offering insights that drive informed
                decision-making. From process optimization to overarching
                business strategy, we provide personalized guidance to fuel your
                success.{" "}
              </p>
              <a href="service-details.html" className="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
