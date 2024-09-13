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
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
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
                <h3>Eosle Commodi</h3>
              </a>
              <p>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                Libero corrupti neque eum hic non ut nesciunt dolorem.
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
                <h3>Ledo Markt</h3>
              </a>
              <p>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                ea aut. Vel qui id voluptas adipisci eos earum corrupti.
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
                <h3>Asperiores Commodit</h3>
              </a>
              <p>
                Non et temporibus minus omnis sed dolor esse consequatur.
                Cupiditate sed error ea fuga sit provident adipisci neque.
              </p>
              <a href="service-details.html" className="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
