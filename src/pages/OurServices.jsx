import MainTemplate from "../components/MainTemplate";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
function OurServices() {
  return (
    <MainTemplate>
      <div className="mx-auto md:max-w-screen-md lg:max-w-screen-lg lg:my-12 relative">
        <h1 className="font-roboto text-6xl font-semibold text-white mb-10 z-50 text-center">
          <div
            className="bg-gradient-to-b from-green to-body_bg absolute"
            style={{
              top: "-10%",
              left: "-15%",
              width: "200%",
              height: "100%",
              zIndex: -10,
            }}
          ></div>
          <div
            className="bg-green absolute opacity-80"
            style={{
              top: "25%",
              right: "-5%",
              width: "40%",
              height: "60%",
              zIndex: -10,
            }}
          ></div>
          <div
            className="bg-green absolute opacity-60"
            style={{
              top: "20%",
              left: "-20%",
              width: "40%",
              height: "60%",
              zIndex: -10,
            }}
          ></div>
          <div
            className="bg-green absolute opacity-60"
            style={{
              top: "20%",
              right: "-20%",
              width: "40%",
              height: "60%",
              zIndex: -10,
            }}
          ></div>
          <div
            className="bg-green absolute opacity-80"
            style={{
              top: "25%",
              left: "-5%",
              width: "40%",
              height: "60%",
              zIndex: -10,
            }}
          ></div>
          Our Services
        </h1>
        <p className="font-roboto text-gray-900 mb-10 text-base text-center">
          RCFH is all about taking a weight off your shoulders. From renowned
          business executives to small business owners, our list of clients
          keeps growing each year. We ensure quality by offering smart, agile
          and customizable solutions for each and every client. Our team members
          will go above and beyond in order to deliver excellent results. With
          our services, you will be able to focus on what really matters - and
          leave the rest to us. Contact us today so we can start working
          together!
        </p>
        <Services />
      </div>
      <HowItWorks />
    </MainTemplate>
  );
}

export default OurServices;
