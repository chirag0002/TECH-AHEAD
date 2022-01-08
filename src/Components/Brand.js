import React from 'react';
import Civo from '../Images/Civo.png'
import Kubernetes from '../Images/Kubernetes.png'
import Github from '../Images/Github.png'
import Polygon from '../Images/Polygon.png'
import Docker from '../Images/Docker.png'
import '../Styling/Brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
    <a href="https://www.civo.com/" target="_blank" rel="noreferrer">
      <img className="civo__logo" src={Civo} alt=" "/>
      </a>
    </div>
    <div>
    <a href="https://github.com/" target="_blank" rel="noreferrer">
      <img src={Github} className="github__logo" alt=" " />
      </a>
    </div>
    <div>
    <a href="https://kubernetes.io/" target="_blank" rel="noreferrer">
      <img src={Kubernetes} className="kub__logo" alt=" " />
      </a>
    </div>
    <div>
    <a href="https://polygon.technology/">
      <img src={Polygon} className="polygon__logo" alt=" "/>
      </a>
    </div>
    <div>
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
      <img src={Docker} className="docker__logo" alt=" " />
      </a>
    </div>
  </div>
);

export default Brand;
