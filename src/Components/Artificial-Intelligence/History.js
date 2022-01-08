import React from 'react'
import '../../Styling/History.css';
import Neural from "../../Images/neural.png";
import Machine from "../../Images/machine-learning.png";
import Deep from "../../Images/deep.png";

const History = () => {
    return (
        <div className="ai_history">
        <div className="ai_history_cont">
        <h1 className="gradient__text history_heading">Artificial Intelligence History</h1>
        <div className="history_starts">
        <div className="history_card">
        <img className ="neural" src={Neural} alt="" />
      
   <div className="history_card">
        <img className ="neural" src={Machine} alt="" />
      

   <div className="history_card">
        <img className ="neural" src={Deep} alt="" />
      
    
</div>
</div>
        </div>
        </div>
        </div>
        <div className="year_starts">
        <h4 className="history_year_1">1950s–1970s</h4>
       <h4 className="history_year_2">1980s–2010s</h4>
       <h4 className="history_year_3">Present Day</h4>
        </div>
       
          <div className="history_links">
        <h5 className="history_name_1">Neural Networks</h5>
       <h5 className="history_name_2">Machine Learning</h5>
        <h5 className="history_name_3">Deep Learning</h5>
        </div>
            <div className="history_para">
        <p  className="history_paras_1">Early work with neural networks stirs excitement for “thinking machines.”</p>
        <p  className="history_paras_2">Machine learning becomes popular.</p>
           <p  className="history_paras_3">Deep learning breakthroughs drive AI boom.</p>
        </div>
        </div>
    )
}

export default History;
