import JoinUs from "../components/JoinUs";
import MainTemplate from "../components/MainTemplate";
import Team from "../components/Team";
import { Link } from "react-router-dom";

function OurTeams() {
  return (
    <MainTemplate>
      <div className="page-title bg-green text-white flex items-center justify-center arc-bottom mb-10">
        <div className="container relative flex flex-col justify-center items-center">
          <h1 className="font-playfair mb-4 font-extrabold tracking-tight leading-none text-6xl text-white py-5">
            Teams
          </h1>
          <h2 className="font-roboto py-1 w-4/5 text-center text-lg">
            Because we value our clients and want them to be satisfied with our
            services, we’re committed to hiring only the best individuals in the
            industry. Our recruitment process is intense, and our training
            programs are rigorous. We’re proud of our team of service experts.
          </h2>
          <nav className="breadcrumbs pt-5">
            <ol>
              <li>
                <a className="text-white p-1 border-b-2 border-red">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="current">Team</li>
            </ol>
          </nav>
        </div>
      </div>
      <Team />
      <JoinUs />
    </MainTemplate>
  );
}

export default OurTeams;
