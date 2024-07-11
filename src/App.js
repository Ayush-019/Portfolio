import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#ffaf4b",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <div className="project-header">My Projects</div>
        <div className="hrLine"></div>

        <ProjectCard
          className="odd"
          projectTitle="SmartKart: A decentralised loyalty managment system"
          projectDesc="An e-commerce platform using blockchain and Solidity, featuring a decentralized loyalty management system with customer-centric tokenomics, providing innovative rewards to enhance user engagement and satisfaction."
          projectLink="https://github.com/orgs/Flipkart-Grid5-0-Blockchain/repositories"
          deployedProjectLink="https://www.youtube.com/watch?v=QQskLAJ6yng"
          projectImg={require("./images/smartkart.png")}
        />

        <ProjectCard
          projectTitle="Eshopperz: Shopping Made Easy!"
          projectDesc="A sophisticated one-stop e-commerce platform using the MERN stack, for all online shopping needs. This project emphasizes a seamless user experience, intuitive interfaces, and high-performance features to ensure a cutting-edge, end-to-end shopping experience."
          projectLink="https://github.com/Ayush-019/Eshopperz"
          deployedProjectLink="https://eshopperz-v7fq.onrender.com/"
          projectImg={require("./images/eshop.png")}
        />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="MetaMint: An NFT Marketplace"
          projectDesc="A decentralized platform where users can buy and sell NFTs, ensuring transparency and true ownership, empowering creators and collectors with a secure and trustworthy marketplace."
          projectLink="https://github.com/Ayush-019/nft_marketplace"
          deployedProjectLink="https://wiggles.vercel.app"
          projectImg={require("./images/nftmarketplace.png")}
        />

        <ProjectCard
          projectTitle="Rise n' Dine: A small Restaurant App"
          projectDesc="A user-friendly restaurant app that allows customers to browse menus, place orders, and make reservations effortlessly, enhancing the dining experience with convenient and intuitive features."
          projectLink="https://github.com/Ayush-019/Restaurant_Website"
          deployedProjectLink="https://risendine007.netlify.app/"
          projectImg={require("./images/Restro.png")}
        />
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer />
      </div>
    </>
  );
}

export default App;
