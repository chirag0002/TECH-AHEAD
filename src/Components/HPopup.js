import React from 'react'
import '../Styling/HPopup.css'
import {CloseButton} from 'react-bootstrap'

const HPopup = (props) => {
    return (props.trigger) ? (
        <div className="hpopup">
            <div className="hpopup-inner">
                <button className="close-btn" onClick={()=> props.setTrigger(false)}><CloseButton /></button>
                {props.children}
            </div>
        </div>
    ) : " ";
}

export default HPopup
