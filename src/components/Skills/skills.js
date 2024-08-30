import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
        I am a skilled and passionate web devloper with experience in creating visually appealing and user-friendly websites. I have a strong understanding of web development and a keen eye for detail. I am proficient in HTML, CSS, Javascript, and React JS.</span>
        <div className="skillBars">
            <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is a demo text,You Can write your own Content here.</p>
            </div>
            </div>
            <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>Website Design</h2>
                <p>This demo text can be changed while making the production ready website.</p>
            </div>
            </div>
            <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                <h2>AppDesign</h2>
                <p>You can write text releted to mobile app development.</p>
            </div>
            </div>
        </div>

    </section>
  );
}

export default skills;