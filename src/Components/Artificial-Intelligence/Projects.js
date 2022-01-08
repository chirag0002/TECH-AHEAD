import React,{useEffect} from 'react';
import '../../Styling/Project.css';
import Aos from "aos";
import 'aos/dist/aos.css';

const Projects = () => {
      useEffect(()=>{
    Aos.init({
      duration:2000});

  });
    return (
        <div className="projects_ai">
        <div className="projects_card">
        <h1 className="gradient__text projects_heading">
            Top Artificial Intelligence Projects
            </h1>
     
      
                     <div data-aos="fade-left" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                            <h3 className="gradient__text project_heading">  Predict Housing Price </h3>
                           <p class="project_content_para">                     
                            Just getting into our first Artificial Intelligence Project Ideas. In this project, you will have to predict the selling price of a new home in Boston. The dataset of this project contains the prices of houses in different areas of the city. You can get the datasets for this project at the UCI Machine Learning Repository.
                           </p>
                           </div>
                           </div>
                           
                              
                         
                     


      
        
          <div data-aos="fade-right" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                               <h3 className="gradient__text project_heading"> Chatbots </h3>
                           <p class="project_content_para">
                         One of the best AI-based projects is to create a chatbot. You should start by creating a basic chatbot for customer service. You can take inspiration from the chatbots present on various websites. Once you have created a simple chatbot, you can improve it and create a more detailed version of the same.
                           </p>
                           </div>
                           </div>
                           
                              
                            <div data-aos="fade-left" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                            <h3 className="gradient__text project_heading">  Voice-based Virtual Assistant for Windows</h3>
                           <p class="project_content_para">
                           This is one of the interesting Artificial Intelligence project ideas. Voice-based personal assistants are handy tools for simplifying everyday tasks. For instance, you can use virtual voice assistants to search for items/services on the Web, to shop for products for you, to write notes and set reminders, and so much more. 
                       
                           </p>
                           </div>
                           </div>
                           
                              
                         
                  
                          <div data-aos="fade-right" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                            
                               <h3 className="gradient__text project_heading">  Facial Emotion Recognition and Detection</h3>
                           <p class="project_content_para">
                           This is one of the trending artificial intelligence project ideas. This project seeks to expand on a pioneering modern application of Deep Learning facial emotion recognition. Although facial emotion recognition has long been the subject of research and study, it is only now that we are witnessing tangible results of that analysis. 
                          
                           </p>
                           </div>
                           </div>
                           
                              
                           
                          <div data-aos="fade-left" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                               <h3 className="gradient__text project_heading">    Customer Recommendation </h3>
                           <p class="project_content_para">
                      
E-commerce has benefitted dramatically from AI. The finest example is Amazon and its customer recommendation system. This customer recommendation system has helped the platform in enhancing its income tremendously thanks to better customer experience.
                           </p>
                           </div>
                           </div>
                           
                              
                        
                          <div data-aos="fade-right" className="project_card_1">
                    
                          <div  className="about_project_card1_">
                               <h3 className="gradient__text project_heading">  Personality Prediction System via CV Analysis </h3>
                           <p class="project_content_para">
                        This is one of the interesting Artificial Intelligence project ideas. It is a challenging task to shortlisting deserving candidates from a massive pile of CVs. What if there’s a software that can interpret the personality of a candidate by analyzing their CV? This will make the selection process much more manageable. This project aims to create advanced software that can provide a legally justified and fair CV ranking system. 
                           </p>
                           </div>
                           </div>
                           
                              
                        
                           
              
      </div>
        </div>
      
        
    )
}

export default Projects
