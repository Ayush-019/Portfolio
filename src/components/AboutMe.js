import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/me11.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <div className="para-1">
          <h3>Hey there, 👋</h3>
          I'm <span> Ayush Garg </span>, a final year student pursuing
          <span>
            (B.Tech + M.Tech) dual degree in Information Technology
          </span>{" "}
          at IIIT Gwalior. My coding journey began in 2020 upon entering the
          college and since then I've been actively engaged in
          <span></span>Competitive Programming and{" "}
          <span>Full Stack Development</span>. Over the past three years, I've
          developed a strong proficiency in creating applications using various
          JavaScript frameworks.
          <br /> <br />
          <div className="mid-para">
            During my academic journey, I developed a profound interest in{" "}
            <span>Blockchain</span> technology and have successfully built
            several web3 applications using Solidity and other blockchain
            frameworks. My experience includes internships as a full stack
            engineer at <span>Fleeguide </span>
            and <span>OyeBusy</span>, where I refined my leadership and teamwork
            skills, contributing effectively within diverse teams.
          </div>
          <div className="para-2_large">
            While I excel in competitive programming and problem-solving, my
            primary interests also extend to core subjects such as{" "}
            <span>computer networking, operating systems, and DBMS</span>. I am
            eager to explore and contribute to new opportunities in the field of
            coding that align with my passions and skills.
          </div>
        </div>
        {/* <br /> <br /> */}
        <div className="profile-photo">
          {/* <div className="heading"> About Me</div> */}
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
      </div>
      <div className="mid-para_small">
        During my academic journey, I developed a profound interest in{" "}
        <span>Blockchain</span> technology and have successfully built several
        web3 applications using Solidity and other blockchain frameworks. My
        experience includes internships as a full stack engineer at{" "}
        <span>Fleeguide </span>
        and <span>OyeBusy</span>, where I refined my leadership and teamwork
        skills, contributing effectively within diverse teams.
      </div>
      <div className="para-2">
        While I excel in competitive programming and problem-solving, my primary
        interests also extend to core subjects such as{" "}
        <span>computer networking, operating systems, and DBMS</span>. I am
        eager to explore and contribute to new opportunities in the field of
        coding that align with my passions and skills.
      </div>
      {/* <div className="name">Ayush</div> */}
    </div>
  );
}
