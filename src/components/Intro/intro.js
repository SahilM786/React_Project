import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import BTN from "../Button/button";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="inttroText">
          I'm <span className="introName">Sahil</span> <br />
          Web Developer
        </span>
        <p className="introPara">
          {" "}
          I am a skilled web developer with experiance in creating <br />{" "}
          visually appealing and user friendly websites{" "}
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <BTN
            classValue={"btn"}
            name={"Hire Me"}
            imgPath={btnImg}
            imgClassValue={"btnImg"}
          ></BTN>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
