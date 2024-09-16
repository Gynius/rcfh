import MainTemplate from "../components/MainTemplate";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import CTA_services from "../components/CTA_services";
import { Link } from "react-router-dom";
function OurServices() {
  return (
    <MainTemplate>
      <div className="page-title bg-green text-white flex items-center justify-center">
        <div class="container position-relative ">
          <h1>Services</h1>
          <p>Our VA Solutions and Services Make Your Life Easier</p>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a className="text-white px-3  bg-red rounded-full border border-1 border-white">
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
      <CTA_services />
    </MainTemplate>
  );
}

export default OurServices;
