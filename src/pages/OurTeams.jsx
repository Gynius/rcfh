import MainTemplate from "../components/MainTemplate";
import Team from "../components/Team";
import { Link } from "react-router-dom";

function OurTeams() {
  return (
    <MainTemplate>
    <div className="page-title bg-green text-white flex items-center justify-center arc-bottom">
        <div className="container position-relative ">
          <h1>Team</h1>
          <p>
            Because we value our clients and want them to be satisfied with our
            services, we’re committed to hiring only the best individuals in the
            industry. Our recruitment process is intense, and our training
            programs are rigorous. We’re proud of our team of service experts.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a className="text-white px-3 bg-red rounded-full border border-1 border-white">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="current">Team</li>
            </ol>
          </nav>
        </div>
      </div>
      <Team />
    </MainTemplate>
  );
}

export default OurTeams;
