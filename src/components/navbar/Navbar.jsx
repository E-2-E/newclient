import "./navbar.scss";
import { Person, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logo.jpg" alt="VVIT CONNECT" height="50px"/>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <Link to="/register">
              <span>Register</span>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
