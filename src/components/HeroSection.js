import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video muted loop autoPlay className="video-bg">
        <source src={process.env.PUBLIC_URL + '/videos/bglol.mp4'} type="video/mp4" />
      </video>
      <h1>Hi, I'm Christeena Joby</h1>
      <p>Passionate Web Developer & Creative Designer</p>
      <div className='hero-btns'>
        <Link to='/services' className='btn-mobile'>
          <button className='btn btn--outline btn--large'>
            VIEW MY WORK
          </button>
        </Link>
        <Link to='/products' smooth={true} duration={500}>
          <button className='btn btn--primary btn--large'>
            MY SKILLS <i className='far fa-play-circle' />
          </button>
        </Link>
      </div>
      
    </div>
  );
}

export default HeroSection;
