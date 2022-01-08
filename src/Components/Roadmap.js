import React from 'react';
import possibilityImage from '../Images/possibility.png';
import '../Styling/Roadmap.css';

const Roadmap = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>What is the next big thing after Internet?<br />
            Virtual Reality and Augmented Reality Is It?<br />
            Well Who Knows! <br />
            Together, they open a world beyond reality, the internet or the internet of things; a new industry, the internet of experiences, is emerging. With the most recent investment in MagicLeap, the VR/AR industry is set to reach $150 Billion by 2030.
        </p>
        <br />
        <br />
        <br />
        <p>
            Click Below to explore some of the famous technologies with a proper roadmap explaning everything about dozens of technologies in Organized and Interactive Manner.
        </p>
        <a href="https://roadmap.sh/" target="_blank" rel="noreferrer">
        <button className="roadmap__buttons">Learn More</button>
        </a>
    </div>
  </div>
);

export default Roadmap;
