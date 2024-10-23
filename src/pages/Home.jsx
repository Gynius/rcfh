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
        <title>RFCH | Virtual Assistant Agency</title>
        <meta
          name="description"
          content="At our VA agency, we specialize in providing tailored Virtual Assistant services to help streamline your operations and enhance productivity. Our team of skilled professionals is equipped to handle a variety of tasks, from administrative support and customer service to social media management and project coordination. By partnering with us, you can focus on your core business activities while we take care of the day-to-day operations. Our flexible and scalable solutions are designed to adapt to your unique needs, ensuring that you have the right support at the right time. Let us help you elevate your business efficiency and achieve your goals with our top-notch services!"
        />
        <meta
          property="og:title"
          content="Unlock Your Business Potential with Our Virtual Assistant Services"
        />
        <meta
          property="og:description"
          content="We offer staffing solutions to fit your needs including dedicated virtual assistants and consulting services to streamline every aspect of your business.
"
        />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=122166160550182258&set=a.122106389372182258"
        />
        <meta property="og:url" content="https://www.rcfhagency.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 my-12">
        <span className="font-semibold text-gray-400 uppercase text-white">
          FEATURED IN
        </span>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          <a
            href="https://www.facebook.com/profile.php?id=61555467761591"
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
