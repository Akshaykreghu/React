import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link className="link-no-decoration" to="/">
        <h1>The Store</h1>
      </Link>

      <Link className="link-no-decoration" to="/logout">
        <button className="logout-button">Log out</button>
      </Link>
    </header>
  );
}

export default Header;
