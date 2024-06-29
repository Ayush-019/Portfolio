import React from "react";
import "./HomeBannerStyle.css";
import cartoon from "../images/main12.png";
import { Link } from "react-scroll";
import { FaScroll } from "react-icons/fa";
import Scroll from "../images/mouse-cursor.png";
export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      {/* <div className="toggleTheme">a</div> */}
      <div className="content">
        <div className="wrapper">
          <div className="name">Ayush Garg</div>
          <div className="staticTitle">
            Programmer
            {/* <div className="hrLine"></div> */}
          </div>
          <ul className="dynamicTitle">
            <li>
              + <span>Developer</span>
            </li>
          </ul>
          <div className="btnss">
            <a
              className="btn"
              href="https://www.linkedin.com/in/ayush-garg-4ba2b1206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
            <a
              className="btn btn2"
              href="https://drive.google.com/file/d/1jZwwWpwH-YRWw6RO88tov_ZmNlOgguuz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="logo scrollLogo">
            <Link
              activeClass="active"
              to="project-header"
              spy={true}
              smooth={true}
              duration={30}
            >
              <div className="logo-img scroll-img">
                <img src={Scroll} alt="scroll" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="girl-with-laptop" />
      </div>
    </div>
  );
}
