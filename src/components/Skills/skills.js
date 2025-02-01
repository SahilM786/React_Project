import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web devloper with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of web development and a keen eye for detail. I am
        proficient in HTML, CSS, Javascript, and React JS.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Javascript</h2>
            <p>This is a demo text placeholder for your JavaScript project. Feel free to replace it with your own content and add interactive functionality to your web applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>NodeJS</h2>
            <p>
            This is a demo text placeholder for your Node.js project. Feel free to replace it with your own content and build scalable, server-side applications with ease.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ReactJS</h2>
            <p>This is a demo text placeholder for your ReactJS project. Feel free to replace it with your own content and enhance your application's UI with dynamic components.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
