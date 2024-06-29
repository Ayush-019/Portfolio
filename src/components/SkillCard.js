import React from "react";
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiReact,
  SiReactrouter,
  SiBootstrap,
  SiFigma,
  SiInkscape,
} from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import { languages, db, libs, tools } from "./skills";

export default function SkillCard({ id }) {
  console.log(languages);
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="hrLine1"></div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            {/* <abbr title="C++">
              <CgCPlusPlus className="techLogo" />
            </abbr>
            <abbr title="HTML 5">
              <TbBrandHtml5 className="techLogo" />
            </abbr>
            <abbr title="JavaScript">
              <TbBrandJavascript className="techLogo" />
            </abbr> */}
            {languages &&
              languages.map((i) => (
                <div title="C++" className="lang">
                  <img src={i.img} alt={i.name}></img>
                  <p className="skillName">{i.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            {/* <abbr title="ReactJS">
              <SiReact className="techLogo" />
            </abbr>
            <abbr title="CSS 3">
              <TbBrandCss3 className="techLogo" />
            </abbr>
            <abbr title="Git/Github">
              <DiGit className="techLogo" />
            </abbr>
            <abbr title="NPM">
              <IoLogoNpm className="techLogo" />
            </abbr>
            <abbr title="Bootstrap">
              <SiBootstrap className="techLogo" />
            </abbr>
            <abbr title="React Router">
              <SiReactrouter className="techLogo" />
            </abbr> */}
            {libs &&
              libs.map((i) => (
                <div title="C++" className="lang">
                  <img
                    src={i.img}
                    alt={i.name}
                    className={i.name === "Express" ? "exp" : ""}
                  ></img>
                  <p className="skillName">{i.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            {/* <abbr title="Visual Studio Code">
              <SiVisualstudiocode className="techLogo" />
            </abbr>
            <abbr title="Windows">
              <IoLogoWindows className="techLogo" />
            </abbr>
            <abbr title="Figma">
              <SiFigma className="techLogo" />
            </abbr>
            <abbr title="Inkscape">
              <SiInkscape className="techLogo" />
            </abbr> */}
            {tools &&
              tools.map((i) => (
                <div title="C++" className="lang">
                  <img src={i.img} alt={i.name}></img>
                  <p className="skillName">{i.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skill-box">
          <h2>Databases</h2>
          <div className="skillset">
            {db &&
              db.map((i) => (
                <div title="C++" className="lang">
                  <img src={i.img} alt={i.name}></img>
                  <p className="skillName">{i.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
