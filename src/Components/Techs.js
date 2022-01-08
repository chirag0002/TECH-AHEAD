import React from 'react';
import Feature from './Fhelp';
import '../Styling/Techs.css';

const Techs = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="TECH-AHEAD" text="The future always feels like it’s running late. Human imagination works harder than human enterprise, but at any given moment, scientists and engineers are redesigning future technology and the world around us in big and small ways." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Out of Dozens of Technologies out there here are the most used ones:</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Blockchain" text="Blockchain technology isn't just a more efficient way to settle securities. It will fundamentally change market structures, and maybe even the architecture of the Internet itself." />
      <Feature title="Artificial Intelligence" text="Artificial intelligence (AI) is the ability of a computer or a robot controlled by a computer to do tasks that are usually done by humans because they require human intelligence and discernment." />
      <Feature title="DevOps" text="DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality." />
    </div>
    <div className="gpt3__whatgpt3-buttons">
        
        <a href="/blockchain"><button>Travel With Us</button></a>
        <a href="/ai"><button>Travel With Us</button></a>
        <button>Travel With Us</button>
    </div>
  </div>
);

export default Techs;
