import React, {Component, useState, useRef }from "react";
import Switch from "react-switch";
import RowFarm from './Farm/components/RowFarm'
import RowCardFarm from './Farm/components/RowCardFarm'
// import {Toggle ,ButtonMenu, ButtonMenuItem} from '../components'


const Farm: React.FC = () => {
  
const [checked, setChecked] = useState(false);
const [grid, setGrid] = useState(false);

    return(
        <div className="home"> 
           <div className="homemainheading">
              <div className="text homeheading">
                <img src="images/hyrule/ribbonbg.png" alt="img" /> 
                <div>Farms</div>
              </div>
              <div className="lgraycolor">The most advanced yield platform in the Kingdom.</div>
            </div>

            <div className="farmcontrol">
              <div className="farmright">
                <div className="farmview">
                  <i class="fas fa-th-large"  onClick={() => setGrid(true)} style={{color:grid==true?"#ddc5ab":"#4f473d"}}></i>
                  <i class="fas fa-th-list"  onClick={() => setGrid(false)} style={{color:grid==false?"#ddc5ab":"#4f473d"}}></i>  
                </div>
                <div className="farmswitch">
                 
                  <Switch 
                    className="reactswitch"
                    onChange={() => setChecked(!checked)} checked={checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    offColor="#2b2117"
                    onColor="#2b2117"
                    onHandleColor="#ddc5ab"
                    height={30}
                    handleDiameter={1}
                    activeBoxShadow="none"
                  />
                   <label>Staked Only</label>
                </div>
              </div>
              
              <div>
          
              </div>
              <div className="farmsearch">
                <div>
                  <h4>Sort by</h4>
                  <input className="input-main"></input>
                </div>
                <div>
                  <h4>Search</h4>
                  <input className="input-main" placeholder="Search Farms"></input>
                </div>
              </div>
            </div>

           
            <div style={{position:"relative"}}>
              <div className="farmrowblockouter" style={{display:grid==true?"none":"block"}}>
                <div className="farmrowblockinner">
                  <RowFarm/>
                  <RowFarm/>
                  <RowFarm/>
                  <RowFarm/>
                  <RowFarm/>
                </div>
                
              </div>
              <div className="farmcardouter" style={{display:grid==false?"none":"flex"}}>
                <RowCardFarm/>
                <RowCardFarm/>
                <RowCardFarm/>
                
               
              </div>
              
            </div>
        </div>
    );
  }


export default Farm;
