import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <h6> &copy; Techflix {new Date().getFullYear()}</h6>
    </footer>
  );
}

export default Footer;
