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
        <h1>LOGO</h1>
        <navbar className="navbar_items">
          <h4 className="navbar_point">FIRST</h4>
          <h4 className="navbar_point">SECOND</h4>
          <h4 className="navbar_point">Third</h4>
          <h4 className="navbar_point">Fourth</h4>
        </navbar>
        <div className="log_sign">
          <button className="log_btn" type="button">LOG IN</button>
          <button className="sign_btn" type="button">Get Started</button>
        </div>
      </div>
      <div className="header_sub_parts">
        <div className="head_quote">
          <div className="head_quote1">
            <h1>You never change things by fighting the existing reality. To change something, build a new <span>TECHNOLOGY</span> that makes theexisting model obsolete.</h1>
          </div>
          <div className="head_quote2">
            <h4>Technology is best when it brings people <span>TOGETHER</span>.</h4>
            <button className="sign_btn" type="button"> GET STARTED </button>
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
