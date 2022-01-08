import React from 'react';
import '../../Styling/Ai.css';

import AI from '../../Images/ai.gif';

import History from './History';
import Technology from './Technologies';
import Blogs from './Blogs'
import Videos from './Videos';
import Uses from './Uses';
import Project from './Projects';
import Footer from '../Footer';
import Company from './Companies';

const Ai = () => {
    return (
        <div className="main_ai">
      
        <div className="ai_part_1">
        {/* <img className="ai_giphy" src={Giphy} alt=""  /> */}
        </div>
  
              {/* <h2 className="gradient__text ai_quote_heading">
        “The coming era of Artificial Intelligence will not be the era of war, but be the era of deep compassion, non-violence, and love.”
<br />
    -Amit Ray, Pioneer of Compassionate AI Movement. </h2>
<div className="quotes_container">
        <img className="ai_quotes" src={Quotes} alt="" />
        </div> */}

        <div className="AI">
          <h1 id="Rendering" className="gradient__text ai_heading">INTRODUCTION TO ARTIFICIAL INTELLIGENCE</h1>
        <div className="ai_card_">
          <div>
        <img className="ai_giphy_2" src={AI} alt="" />
        </div>
          <p className="ai_ques1">WHAT IS ARTIFICIAL INTELLIGENCE?</p>
       
        <p className="ai_content1">Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence..</p>
      
        <p className="ai_ques2">WHAT ARE THE FOUR TYPES OF ARTIFICIAL INTELLIGENCE?</p>
     
        <p className="ai_content2">
          <ul>
            <li className="ai_li">Reactive Machines</li>
            <li className="ai_li"> Limited Memory</li>
            <li className="ai_li">Theory of Mind</li>
            <li className="ai_li">Self-Awareness</li>
          </ul>
        </p>
     
        <p className="ai_ques3">WHAT ARE EXAMPLES OF ARTIFICIAL INTELLIGENCE?</p>
        
        <p className="ai_content3">
          <ul>
            <li>Siri, Alexa and other smart assistants</li>
            <li>Self-driving cars</li>
            <li>Robo-advisors</li>
            <li>Conversational bots</li>
            <li>Email spam filter</li>
            <li>Netflix&apos;s recommendations</li>
          </ul>
        </p>
     
    
        </div>
     </div>
     <History />
     <Technology />
     <Uses />
     <Project />
     
     <Company />
     <Videos />
     <Blogs />
     <Footer />
     

  

     </div>
    )
};
export default Ai
