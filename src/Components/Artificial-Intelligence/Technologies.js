import React from 'react';
import '../../Styling/Technologies.css'
import Tech from '../../Images/Tech.png';
import NLP from '../../Images/NLP.jpg';
import Machine from '../../Images/machine.jpeg';
import vision from '../../Images/vision.png';

const Technologies = () => {
    return (
        <div className="main_technologies">
        <h1 className="gradient__text ai_technologies_heading">Five AI technologies that you need to know </h1>
        <br />
<h3 className="gradient__text ai_tech">From machine learning to computer vision, these technologies are fueling the AI craze</h3>
<div className="tech_checking">
        <div className="main_technologies_card_1">
            <div className="circle">1</div>
            <h1 className="gradient__text tech_heading_1">Artificial Intelligence </h1>
            <p className="tech_para">
            Artificial intelligence (AI) makes it possible for machines to learn from experience, adjust to new inputs and perform human-like tasks.
            </p>
<p className="tech_para">
Most AI examples that you hear about today – from chess-playing computers to self-driving cars – rely heavily on deep learning and natural language processing.
</p>
<p className="tech_para">
Using these technologies, computers can be trained to accomplish specific tasks by processing large amounts of data and recognizing patterns in the data.
</p>
            </div>
          <img className="tech" src={Tech} alt="" />
            </div>
            <div className="tech_checking">
           
          <img className="machine" src={Machine} alt="" />
           
              <div className="main_technologies_card_2">
            <div className="circle">2</div>
            <h1 className="gradient__text tech_heading_2"> Machine Learning </h1>
            <p className="tech_ml">
            Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.
          </p>
          <p className="tech_ml">
While artificial intelligence (AI) is the broad science of mimicking human abilities, machine learning is a specific subset of AI that trains a machine how to learn.
</p>
            </div>
            </div>
        <div className="tech_checking">
              <div className="main_technologies_card_3">
            <div className="circle">3</div>
             <h1 className="gradient__text tech_heading_3"> Deep Learning </h1>
     <p className="tech_deep">  
Deep learning is a type of machine learning that trains a computer to perform human-like tasks, such as recognizing speech, identifying images or making predictions.
</p>
<p className="tech_deep">

Instead of organizing data to run through predefined equations, deep learning sets up basic parameters about the data and trains the computer to learn on its own by recognizing patterns using many layers of processing.
</p>
            </div>
                <img className="tech" src={Tech} alt="" />
            </div>
<div className="tech_checking">
    <img className="nlp" src={NLP} alt="" />
            
              <div className="main_technologies_card_4">
            <div className="circle">4</div>
             <h1 className="gradient__text tech_heading_4"> Natural language processing </h1>
            
            <p className="tech_natural">
            Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret and manipulate human language.
</p>
<p  className="tech_natural">
NLP helps computers communicate with humans in their own language, making it possible for computers to read text, hear speech, interpret it, measure sentiment and determine which parts are important.
            </p>
            </div>
            </div>
            <div className="tech_checking">
              <div className="main_technologies_card_5">
            <div className="circle">5</div>
             <h1 className="gradient__text tech_heading_5"> Computer vision </h1>
            <p className="tech_vision">
            Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they “see.”
            </p>
            <p className="tech_vision">

From recognizing faces to processing the live action of a football game, computer vision rivals and surpasses human visual abilities in many areas.
</p>
            </div>
                <img className="vision" src={vision} alt="" />
            </div>
        </div>
    )
}

export default Technologies
