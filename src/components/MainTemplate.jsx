import Nav from "./Navbar";
import Footer from "./Footer";

function MainTemplate({ children }) {
  return (
    <div className="overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default MainTemplate;
