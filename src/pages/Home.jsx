import Hero from "../components/Hero";
import MainTemplate from "../components/MainTemplate";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import CTA_services from "../components/CTA_services";
import SubscribeForm from "../components/SubscribeForm";
import WhyChooseUs from "../components/WhyChooseUs";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <MainTemplate>
      <Helmet>
        <title>RFCH | VA Agency</title>
        <meta
          name="description"
          content="Discover top-notch Virtual Assistant services at our VA agency, designed to elevate your business efficiency and support your goals."
        />
      </Helmet>

      <Hero />
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 my-12">
        <span className="font-semibold text-gray-400 uppercase">
          FEATURED IN
        </span>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          <a
            href="https://www.facebook.com/people/RCFH/65555467765595/"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 :hover:text-gray-400 flex justify-center items-center text-2xl gap-4 font-extrabold font-roboto"
          >
            <FaFacebook className="text-4xl" /> Facebook
          </a>
          <a
            href="https://ph.linkedin.com/company/reliable-consulting-for-hire"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 :hover:text-gray-400 flex justify-center items-center text-2xl gap-4 font-extrabold font-roboto"
          >
            <FaLinkedin className="text-4xl" /> LinkedIn
          </a>
          <a
            href="mailto:support@rcfhagency.com"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 :hover:text-gray-400 flex justify-center items-center text-2xl gap-4 font-extrabold font-roboto"
          >
            <FaGoogle className="text-4xl" /> Google
          </a>
        </div>
      </div>
      <WhatWeDo />
      <WhoWeAre />
      <WhyChooseUs />
      <SubscribeForm />
      <CTA_services />
    </MainTemplate>
  );
}

export default Home;
