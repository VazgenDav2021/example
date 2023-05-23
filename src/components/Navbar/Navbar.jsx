import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="mainNavigation">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
