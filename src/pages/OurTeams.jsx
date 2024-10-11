import JoinUs from "../components/JoinUs";
import MainTemplate from "../components/MainTemplate";
import Team from "../components/Team";
import VASpotlightLayout from "../components/VASpotlightLayout";
import Rcfh from "../components/Rcfh";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";

function OurTeams() {
  return (
    <MainTemplate>
      <Helmet>
        <title>RFCH | Teams</title>
        <meta
          name="description"
          content="Empower your team with our Virtual Assistant services. Enhance collaboration and efficiency to achieve your business goals."
        />
      </Helmet>

      <div className="page-title text-white flex items-center justify-center bg-white arc-bottom z-10">
        <div className="container relative flex flex-col justify-center items-center z-10">
          <h1
            className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-white py-5"
            data-aos="fade-down"
          >
            Teams
          </h1>
          <h2
            className="font-roboto py-1 w-4/5 text-center text-lg text-white"
            data-aos="fade-up"
          >
            Because we value our clients and want them to be satisfied with our
            services, we’re committed to hiring only the best individuals in the
            industry. Our recruitment process is intense, and our training
            programs are rigorous. We’re proud of our team of service experts.
          </h2>
          <nav className="breadcrumbs pt-5" data-aos="fade-up">
            <ol>
              <li>
                <a className="text-white p-1 ">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="current text-white">
                <a className="p-1 border-b-2 border-red">Teams</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Rcfh />
      <VASpotlightLayout />
      <Team />
      <JoinUs />
    </MainTemplate>
  );
}

export default OurTeams;
