import React from "react";
import {
  FaArrowRight,
  FaMoneyBillWave,
  FaChartLine,
  FaChartBar,
  FaEnvelope,
} from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

// Initialize AOS
AOS.init();

function PerksNBenefits() {
  return (
    <>
      <section className="py-10 m-10 flex flex-col justify-center items-center gap-2 ">
        <h1 className="text-center font-playfair text-6xl font-extrabold text-green py-10 bo">
          Perks and Benefits
        </h1>
        <div
          className="container py-10 w-full flex justify-evenly gap-6 flex-wrap "
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="card-container xl:w-1/6 xs_s:w-1/3">
            <div className="card">
              <div className="card-front flex flex-col items-center gap-4">
                <div className="border-4 border-green text-white rounded-full w-2/3 bg-white aspect-square flex items-center justify-center text-sm text-center">
                  <FaEnvelope className="text-4xl xl:text-6xl text-red" />
                </div>
                <h1 className="text-center w-4/5 text-xl">
                  Professional Environment
                </h1>
              </div>
              <div className="card-back flex flex-col items-center justify-center gap-4 p-4 bg-green text-white rounded-lg">
                <p className="text-center">
                  Enjoy a professional and supportive work environment.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container xl:w-1/6 xs_s:w-1/3">
            <div className="card">
              <div className="card-front flex flex-col items-center gap-4">
                <div className="border-4 border-green rounded-full w-2/3 bg-white aspect-square flex items-center justify-center text-sm text-center">
                  <FaMoneyBillWave className="text-4xl xl:text-6xl text-red" />
                </div>
                <h1 className="text-center w-4/5 text-xl">
                  Competitive pay and job security
                </h1>
              </div>
              <div className="card-back flex flex-col items-center justify-center gap-4 p-4 bg-green text-white rounded-lg">
                <p className="text-center">
                  We offer competitive salaries and job security.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container xl:w-1/6 xs_s:w-1/3">
            <div className="card">
              <div className="card-front flex flex-col items-center gap-4">
                <div className="border-4 border-green rounded-full w-2/3 bg-white aspect-square flex items-center justify-center text-sm text-center">
                  <FaArrowRight className="text-4xl xl:text-6xl text-red" />
                </div>
                <h1 className="text-center w-4/5 text-xl">
                  Flexible WFH options
                </h1>
              </div>
              <div className="card-back flex flex-col items-center justify-center gap-4 p-4 bg-green text-white rounded-lg">
                <p className="text-center">
                  Flexible work-from-home options to suit your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container xl:w-1/6 xs_s:w-1/3">
            <div className="card">
              <div className="card-front flex flex-col items-center gap-4">
                <div className="border-4 border-green rounded-full w-2/3 bg-white aspect-square flex items-center justify-center text-sm text-center">
                  <FaChartLine className="text-4xl xl:text-6xl text-red" />
                </div>
                <h1 className="text-center w-4/5 text-xl">
                  Performance appraisals and incentives
                </h1>
              </div>
              <div className="card-back flex flex-col items-center justify-center gap-4 p-4 bg-green text-white rounded-lg">
                <p className="text-center">
                  Regular performance appraisals and incentives.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container xl:w-1/6 xs_s:w-1/3">
            <div className="card">
              <div className="card-front flex flex-col items-center gap-4">
                <div className="border-4 border-green rounded-full w-2/3 bg-white aspect-square flex items-center justify-center text-sm text-center">
                  <FaChartBar className="text-4xl xl:text-6xl text-red" />
                </div>
                <h1 className="text-center w-4/5 text-xl">
                  Career Growth opportunities
                </h1>
              </div>
              <div className="card-back flex flex-col items-center justify-center gap-4 p-4 bg-green text-white rounded-lg">
                <p className="text-center">
                  Opportunities for career growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PerksNBenefits;
