import React from "react";
import MainTemplate from "../components/MainTemplate";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
function OurServices() {
  return (
    <MainTemplate>
      <div class="page-title bg-green text-white">
        <div class="container position-relative">
          <h1>Services</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav class="breadcrumbs">
            <ol>
              <li>
                <a href="index.html" className="text-red">
                  Home
                </a>
              </li>
              <li class="current">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      <Services />
      <HowItWorks />
    </MainTemplate>
  );
}

export default OurServices;
