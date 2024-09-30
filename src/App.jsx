import "./App.css";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import OurTeams from "./pages/OurTeams";
import VaNinja from "./pages/VaNinja";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>RFCH | Virtual Assistant Services</title>
        <meta
          name="description"
          content="Virtual Assistant Services for your business. Hire a VA Ninja to help you with your business tasks."
        />
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/teams" element={<OurTeams />} />
        <Route path="/va-ninja" element={<VaNinja />} />
      </Routes>
    </Router>
  );
}

export default App;
