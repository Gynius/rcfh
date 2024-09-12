import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyUs from "./components/WhyUs";
import WhatWeDo from "./components/WhatWeDo";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default App;
