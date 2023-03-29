import React from 'react'
import './footer.css'
import {BsLinkedin,BsFacebook,BsTwitter} from 'react-icons/bs'


function footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">UmarShamsher</a>
      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://linkin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; UmarShamsher. All rights reverved.</small>
    </div>
    </footer>
  )
}

export default footer