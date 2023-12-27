import Navbar from "../../components/navbar/Navbar";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Works from "../../components/works/Works";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import "./homepage.scss";
import { useState } from "react";
import Menu from "../../components/menu/Menu";

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="homepage">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
