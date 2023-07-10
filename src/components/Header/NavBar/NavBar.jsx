import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
  return <ul className="links">
    <li><Link className="links" to="/">Home</Link></li>
    <li><Link className="links" to="/search">Search</Link></li>
    <li><Link className="links" to="/create-new-pokemon">Create New</Link></li>
  </ul>;
};

export default NavBar;
