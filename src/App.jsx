import "./App.css";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import OurTeams from "./pages/OurTeams";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/teams" element={<OurTeams />} />
      </Routes>
    </Router>
  );
}

export default App;