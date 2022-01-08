import React from 'react';
import Head from '../Videos/Header.mp4';
import '../Styling/Header.css';
import Hepa from '../Images/headpart.png';

const Header = () => (
  <div>
    <div className="header">
      <video className="header_video" autoPlay loop muted>
        <source src={Head} type="video/mp4" />
      </video>
      <div className="header_content">
        <div className="header_content_heading">
        <a href="/"><h1 className="gradient__text">TECH-AHEAD</h1></a>
      </div>
        <navbar className="navbar_items gradient__text">
          <a href="/blockchain"> <h4 className="navbar_point">Blockchain</h4></a>
          <a href="/ai"><h4 className="navbar_point">AI</h4></a>
          <a href="/devops"><h4 className="navbar_point">Dev Ops</h4></a>
        </navbar>
        <div className="log_sign">
          <a href="/login"><button className="log_btn" type="button">LOGIN</button></a>
          <a href="#Rendering"> <button className="sign_btn" type="button">Get Started</button></a>
        </div>
      </div>
      <div className="header_sub_parts">
        <div className="head_quote">
          <div className="head_quote1">
            <h1 className="head_quote1.1">You never change things by fighting the existing reality. To change something, build a new <span className="gradient__text">TECHNOLOGY</span> that makes the existing model obsolete.</h1>
          </div>
          <div className="head_quote2">
            <h4>Technology is best when it brings people <span className="gradient__text">TOGETHER</span>.</h4>
          </div>
        </div>
        <div className="head_image">
          <img className="headImage" src={Hepa} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
