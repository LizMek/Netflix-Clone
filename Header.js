import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${show && "header_black"}`}>
      {/* Left section with navigation buttons */}
      <div className="header_nav">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="header_links">
          <a href="/">Home</a>
          <a href="/">TV Shows</a>
          <a href="/">Movies</a>
          <a href="/">New & Popular</a>
          <a href="/">My List</a>
          <a href="/">Browse by Language</a>
        </div>
      </div>

      <div className="header_right">
        <div className="header_search">
          <i className="fas fa-search"></i>
          {/* <input type="text" placeholder="Search" /> */}
        </div>
        <img
          className="header_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Header;
