import React from 'react';
import '../Styling/Contribute.css';

const Contribute = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>
      Help us in contributing more by adding some features, knowledge, content or your experience which will help the community.
      <br />
      Click on Get Started button to land on our GitHub repo to make a change.
      </h3>
    </div>
    <div className="gpt3__cta-btn">
      <a href="https://github.com/SuperAayush/TECH-AHEAD" target="_blank" rel="noreferrer"><button type="button">Get Started</button></a>
    </div>
  </div>
);

export default Contribute;
