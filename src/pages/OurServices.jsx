import MainTemplate from "../components/MainTemplate";
import Services from "../components/Servicesv2";
import HowItWorks from "../components/Howitworksv2";

import Booking from "../components/Booking";
import { Link } from "react-router-dom";
function OurServices() {
  return (
    <MainTemplate>
      <div className="page-title text-white flex items-center justify-center bg-green arc-bottom z-10">
        <div class="container relative flex flex-col justify-center items-center ">
          <h1 className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-white py-5">
            Services
          </h1>
          <h2 className="font-roboto py-1 w-4/5 text-center text-lg">
            Our VA Solutions and Services Make Your Life Easier
          </h2>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a className="text-white p-1  border-b-2 border-red">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="current">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      <Services />
      <HowItWorks />
      <Booking />
      {/* <div className="clipped bg-join_us_bg w-full h-96 ">
        <p className="text">Hello, I am clipped!</p>
      </div> */}
    </MainTemplate>
  );
}

export default OurServices;
