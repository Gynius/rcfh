import "./App.css";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import OurTeams from "./pages/OurTeams";
import VaNinja from "./pages/VaNinja";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
