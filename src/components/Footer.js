import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Stay updated with my latest projects and achievements.
        </p>
        <p className='footer-subscription-text'>
          Let's collaborate for a brighter future.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Portfolio</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Resume</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Contact Info</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Connect on Social Media</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Explore</h2>
            <Link to='/'>Skills</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Blog</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Follow Me</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>GitHub</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Christeena Joby
              <i className='fab fa-react' />
            </Link>
          </div>
          <small className='website-rights'>Christeena Joby © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
