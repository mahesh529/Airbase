import React from 'react';
import logo from './../../assets/logo.png';
import lock from './../../assets/lock.png';

import './header.component.scss';

function AppHeader(){
    return(
        <div id="header" className="mobile-container desk-container">
            <img alt="airbase" src={logo}/>
            <div className="hr"></div>
            <div id="sec_msg_cont">
                <div  id="sec_msg" >
                    <img alt="lock" src={lock}/>
                    Security Message
                </div>
                <div className="small-font">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
                </div>
            </div>
          
        </div>
    );
}

export default AppHeader;