import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Help</h4>
        <ul>
          <li>FAQ</li>
          <li>Support</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
