import React from 'react'
import Affle from '../../Images/Affle.png'
import '../../Styling/Companies.css'
import Tata from '../../Images/Tata.png';
import Keltin from '../../Images/Keltin.png';
import Persistent from '../../Images/Persisent.png';
import Oracle from '../../Images/Oracle.png';
import Zensar from '../../Images/Zensar.png';
import Giphy from '../../Images/giphy.gif';

const Companies = () => {
    return (
        <div>
        <div className="top-companies"> 
         <h1 className="gradient__text ai_top_company"> Top Companies in Artificial Intelligence </h1>
         </div>
          <div class="canvas"> 
         
  <div class="frame">
    <div class="column">
      <div class="row">
        <div class="card no-anim"></div>
        <div class="card no-anim"><img className="company_image"  src={Giphy}   alt="" />
          <div class="overlay"></div>

        </div>
        <div class="card no-anim"><img  className="company_image"  src={Giphy}   alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim"><img  className="company_image"  src={Giphy}   alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim"></div>
      </div>
      <div class="row">
        <div class="card no-anim">
          <img  className="company_image"  src={Giphy}  alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card img1">
          <img  className="company_image" src={Affle} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card img2">
          <img  className="company_image" src={Tata} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card img">
          <img  className="company_image" src={Keltin} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card no-anim">
          <img  className="company_image"  src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
      </div>
      <div class="row">

        <div class="card no-anim">
          <img  className="company_image" src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card img">
          <img  className="company_image" src={Oracle} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card img">
          <img  className="company_image" src={Persistent} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card img">
          <img  className="company_image" src={Zensar} alt="" />
          <p className="company_1"></p>
        </div>
        <div class="card no-anim">
          <img  className="company_image"  src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
      </div>
      <div class="row">
        <div class="card no-anim">
          <img  className="company_image" src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim">
          <img  className="company_image" src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim"><img  src={Giphy}  alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim"><img  src={Giphy} alt="" />
          <div class="overlay"></div>
        </div>
        <div class="card no-anim"></div>
      </div>
    </div>
  </div>
</div>

       </div>
     
    )
}

export default Companies
