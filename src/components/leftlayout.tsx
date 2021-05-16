import React, { useState, useRef, useEffect } from "react";
import Footer from './Menu/Footer/' 
import Panel from './Menu/Panel/' 


const Leftlayout: React.FC = () => {
    const wrapperRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(true);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })


    return (
        <div>
            <div className="bg-fade" style={{ display: (showMenu == true) ?"none" : "block" }} onClick={() => setShowMenu(true)}></div>
            <div className="mobilenav">
                <i className={(showMenu == true) ? "fas fa-bars" : "fas fa-times"} onClick={() => setShowMenu(!showMenu)} ></i>
                <img src={'./images/hyrule/logo.png'} className="navlogo" />
            </div>
            <div className="left_layout styledpanelcss" style={{ display: width <= 1024 ? (showMenu == true ?"none" : "flex" ):"flex"}}>
                <Panel setShowMenu={setShowMenu}/>
                <Footer />
            </div>
        </div>
    );
}

export default Leftlayout;
