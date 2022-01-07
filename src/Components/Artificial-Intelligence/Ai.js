import React from 'react';
import './Ai.css';
import Giphy from '../../Images/giphy.gif';
import AI from '../../Images/ai.gif';
import Quotes from '../../Images/Quotes.jpg';

const Ai = () => {
    return (
        <div className="main_ai">
        <div className="ai_part_1">
        <img className="ai_giphy" src={Giphy} alt=""  />
        </div>
        
        <div className="ai_card_">
        <img className="ai_giphy_2" src={AI} alt="" />
        </div>
        </div>
    )
};
export default Ai
