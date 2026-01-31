import React from "react";
import "./styling/footer.scss";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top"></div>

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h1>VaahanSeva</h1>
          <p>
            Secure digital vehicle verification using QR codes and biometric
            authentication.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Generate QR</a>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Data Security</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 support@vaahanseva.in</p>
          <p>📍 India</p>

          <div className="socials">
            <FaGithub />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} VaahanSeva. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
