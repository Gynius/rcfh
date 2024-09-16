import React from "react";

function HowItWorks() {
  return (
    <section id="why-us" className="why-us section">
      <div className="container">
        <h1 className="text-center font-roboto text-4xl font-semibold py-4 mb-10 text-red">
          How it Works
        </h1>
        <div className="row no-gutters why-us-section">
          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span>01</span>
            <h4>Discover</h4>
            <p>
              We identify expectations and critical issues facing our clients,
              both large and small. Our unique approach is not only what
              differentiates us, but also what makes us successful.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>02</span>
            <h4>Delegate</h4>
            <p>
              We Assign the right people to the right task ensures that it is
              expertly handled and completely accomplished.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>03</span>
            <h4>Deploy</h4>
            <p>
              We Execute tasks. Each and everyone is knowledgeable and up to the
              task. Coordination at its finest in providing the best output.
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>04</span>
            <h4>Deliver</h4>
            <p>
              We are Results Driven to provide services and solutions to help
              organizations facilitate change, achieve their vision and optimize
              performance and productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
