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
    useEffect(() => {
        document.querySelector(".body_main").addEventListener("click", handleClickOutside, false);
        return () => {
            document.querySelector(".body_main").removeEventListener("click", handleClickOutside, false);
        };
      }, []);
      
  const handleClickOutside = event => {
    if (!(wrapperRef.current && !wrapperRef.current.contains(event.target)) )   {
        setShowMenu(true);
    }
  };
    return (
        <div>
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
