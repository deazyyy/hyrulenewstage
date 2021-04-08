import React, {Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect 
  } from "react-router-dom";


const Leftlayout: React.FC = () => {
    const width = window.innerWidth;

    const [mobile, setMobile] = useState(true);
    return(
        <>
        <div className="mobilenav">
            <i className={(mobile==true )?"fas fa-bars":"fas fa-times"}  onClick={() => setMobile(!mobile)} ></i>
            <img src={'./images/hyrule/logo.png'} className="navlogo"/>
        </div>
        <div className="left_layout styledpanelcss" style={{display:mobile==true && width < 1024?"none":"flex"}}> 
            <div className="header">
                <img src={'./images/hyrule/logo.png'} className="navlogo"/>
                <div className="menulinkouter">
                    <Link to="/"><img src="images/icons/ic1.png" />Home</Link>
                </div>
                <div className="menulinkouter">
                    <Link  data-toggle="collapse" data-target="#excnav"><img src="images/icons/ic2.png" />Trade <i class="fas fa-angle-down"></i></Link>
                    <div className="menulinkinner collapse" id="excnav">
                        <a href="#">Exchange</a>
                        <a href="#">Liquidity</a>
                    </div>
                </div>
                <div className="menulinkouter">
                    <Link to="/farm"><img src="images/icons/ic3.png" />Lon Lon Ranch</Link>
                </div>
                <div className="menulinkouter">
                    <Link href="#"><img src="images/icons/ic4.png" />Reservoirs</Link>
                </div>
                <div className="menulinkouter">
                    <Link to="/kokiri"><img src="images/icons/ic5.png" />Kokiri Shop</Link>
                </div>
                <div className="menulinkouter">
                    <Link to="/gambling"><img src="images/icons/ic6.png" />Gambling</Link>
                </div>
                <div className="menulinkouter">
                    <Link href="#"><img src="images/icons/ic7.png" />Vaults</Link>
                </div>
                <div className="menulinkouter">
                    <Link href="#"><img src="images/icons/ic8.png" />Audit</Link>
                </div>
                <div className="menulinkouter">
                    <Link href="#"><img src="images/icons/ic8.png" />Roadmap</Link>
                </div>
                <div className="menulinkouter">
                    <Link href="#"><img src="images/icons/ic10.png" />Info</Link>
                </div>
            </div>
            <div className="footer">
                <div className="panelFooter">
                    <button className="btn-main">connect</button>
                    <div className="panelinfoouter">
                        <div className="panelprice">
                            <img src={'./images/hyrule/gem.png'} />
                            $0.45
                        </div>
                        <div className="panelsocial">
                            <img src={'./images/icons/twitter.png'} />
                            <img src={'./images/icons/telegram.png'} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Leftlayout;
