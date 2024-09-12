import Nav from "./Navbar";
import Footer from "./Footer";

function MainTemplate({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default MainTemplate;
