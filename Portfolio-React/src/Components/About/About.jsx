import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an MERN stack developer, Built user friendly web apps with react.js</p>
                <p>Create scalable server-side application using Node.js & design efficient MongoDB database.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>5+ & 20+</h1>
            <p>Major & Minor Projects</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>5+ & 20+</h1>
            <p>Major & Minor Projects</p>
        </div>
        <hr/>
        <div className="about-achivement">
            <h1>5+ & 20+</h1>
            <p>Major & Minor Projects</p>
        </div>
      </div>
    </div>
  )
}

export default About