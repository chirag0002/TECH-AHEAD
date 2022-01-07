import React,{useState} from 'react';
import HPopup from './HPopup'
import ai from '../Images/giphy.gif';
import '../Styling/Header.css';

const Header = () =>{ 
    const[popup,setPopup]=useState(false);
    return(
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Explore Every Tech Which Lies Ahead With Us.</h1>
      <p>If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.
        <br/>
        <br/>
        <br/>
          Which Tech do you think will rule the upcoming decades?
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Do Let us Know!" />
        <button type="button" onClick={()=>setPopup(true)}>Submit</button>
      </div>
      <HPopup trigger={popup} setTrigger={setPopup}>
        <h3>Your response has been recorded.</h3>
        </HPopup>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt ="ai giphy" />
    </div>
  </div>
);
}

export default Header;
