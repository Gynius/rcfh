import MainTemplate from "../components/MainTemplate";
function OurTeams() {
  return (
    <MainTemplate>
      <div className="page-title bg-green text-white flex items-center justify-center">
        <div className="container position-relative ">
          <h1>Team</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro
            placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Team</li>
            </ol>
          </nav>
        </div>
      </div>
    </MainTemplate>
  );
}

export default OurTeams;
