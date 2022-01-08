import React from 'react';
import '../Styling/Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>TECH-AHEAD, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="/about"><p>About</p></a>
        <p><a href="https://github.com/SuperAayush/TECH-AHEAD" target="_blank" rel="noreferrer"> Contribute </a></p>
        <p></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Content</h4>
        <p><a href="https://discover-blogs.netlify.app/" target="_blank" rel="noreferrer"> Blogs </a></p>
        <p><a href="https://www.udemy.com/home/my-courses/learning/" target="_blank" rel="noreferrer"> Learning Platform </a></p>
         <p><a href="https://discord.gg/E8D5STT8" target="_blank" rel="noreferrer"> Discord </a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><a href="mailto:aayusharma1401@gmail.com">Aayush Sharma</a></p>
        <p><a href="mailto:bhavya.sachdeva.58@gmail.com">Bhavya Sachdeva</a></p>
        <p><a href="mailto:varshneychirag34@gmail.com">Chirag Varshney</a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 TECH-AHEAD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
