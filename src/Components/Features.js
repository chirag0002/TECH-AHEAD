import React from 'react';
import Feature from './Fhelp';
import '../Styling/Features.css';
import Dec from "../Images/dec.gif"

const featuresData = [
  {
    title: 'Improved Business Agility',
    text: 'Technology solutions allow small businesses to remain agile and quick to respond to change within the markets. Integration of various tech leads to increased collaboration among teams leading to better product development.',
  },
  {
    title: 'Improved Staff Coordination and Collaboration',
    text: 'Significant advances in communication technologies have allowed corporations to organize their teams better. Software products such as Asana and G suite improve collaboration among your staff members.',
  },
  {
    title: 'Automation and Productivity',
    text: 'The adoption of technology solutions for business allows small and medium-sized enterprises to run as efficiently as the larger corporations. Tapping into the benefits of high-speed internet and automation software allows for better handling of vital tasks.',
  },
  {
    title: 'Increased Revenue Streams',
    text: 'Technology solutions for business allow executives to generate new sources of revenue for their enterprises. The creation of e-commerce stores enables sales teams to target a broader customer base.',
  },
  {
    title: 'Better Customer Experience',
    text: 'Intuitive web designs can help streamline your operations on the first point of contact with your potential clients. Automated tools can enable customers to book appointments and consultations.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    <img src={Dec} alt="" />
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
