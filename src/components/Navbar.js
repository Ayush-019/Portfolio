import React, { useState, useEffect } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Navbar() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
        >
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>A<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={30}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={click ? "social-links active" : "social-links"}>
        <a
          href="https://www.linkedin.com/in/ayush-garg-4ba2b1206/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaLinkedin
            className="social"
            size={windowDimensions.width > 1500 ? 24 : 20}
            // style={{ marginRight: "2rem", marginBottom: "20px" }}
          />
        </a>
        <a
          href="https://github.com/Ayush-019"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaGithub
            className="social"
            size={windowDimensions.width > 1500 ? 24 : 20}
            // style={{ marginRight: "2rem", marginBottom: "20px" }}
          />
        </a>
        <a
          href="https://leetcode.com/gargayush2002/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <SiLeetcode
            className="social"
            size={windowDimensions.width > 1500 ? 24 : 20}
            // style={{ marginRight: "2rem", marginBottom: "20px" }}
          />
        </a>

        <a
          href="https://codeforces.com/profile/ash__007"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <SiCodeforces
            className="social"
            size={windowDimensions.width > 1500 ? 24 : 20}
            // style={{ marginRight: "2rem", marginBottom: "20px" }}
          />
        </a>
        <a
          href="https://www.instagram.com/ayushgarg_07/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <FaInstagram
            className="social"
            size={windowDimensions.width > 1200 ? 24 : 20}
            // style={{ marginRight: "2rem", marginBottom: "20px" }}
          />
        </a>
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
