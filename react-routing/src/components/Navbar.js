import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand"><Link to='/'>Techflix</Link></div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to='/about'>About us</Link></li>
        <li className="nav-item"><Link to='/contact'>Contact us</Link></li>
        <li className="nav-item"><Link to='/hooks'>Hooks</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
