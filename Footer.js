import React from "react";
import "./Footer.css"; // This is where your CSS will be

function Footer() {
  return (
    <div className="footer">
      <div className="footer_links">
        <ul>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/">Media Center</a>
          </li>
          <li>
            <a href="/">Investor Relations</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Ways to Watch</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Cookie Preferences</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer_copy">
        <p>© 2024 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
