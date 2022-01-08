import React from 'react'
// import ai_History from '../../Images/History.jpeg';
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
    {/* <img className="history_ai_pic" src={ai_History} alt="" /> */}
      
        </div>
        </div>
        </div>
        <div className="year_starts">
        <h1 className="history_year">hello</h1>
       <h1 className="history_year">hello</h1>
       <h1 className="history_year">hello</h1>
        </div>
          <div className="history_links">
        <h3 className="history_name">Neural Networks</h3>
       <h3 className="history_name">Neural Networks</h3>
        <h3 className="history_name">Neural Networks</h3>
        </div>
            <div className="history_para">
        <p  className="history_paras">Early work with neural networks stirs excitement for “thinking machines.”</p>
        <p  className="history_paras">Early work with neural networks stirs excitement for “thinking machines.”</p>
           <p  className="history_paras">Early work with neural networks stirs excitement for “thinking machines.”</p>
        </div>
        </div>
    )
}

export default History;
