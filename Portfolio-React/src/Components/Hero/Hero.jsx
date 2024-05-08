import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I,m Harshad Kumbhar,</span>Fullstack Blockchain Developer</h1>
      <p>I am MERN Stack Developer from Maharashtra, INDIA with MCA degree as Fresher</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero