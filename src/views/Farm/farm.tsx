import React, { Component, useState, useRef } from "react";
import Switch from "react-switch";
import RowFarm from './components/RowFarm'
import RowCardFarm from './components/RowCardFarm'
import WithdrawModal from './components/Modals/WithdrawModal'
import Heading from 'components/Header/Header'
// import {Toggle ,ButtonMenu, ButtonMenuItem} from '../components'


const Farm: React.FC = () => {

  const [checked, setChecked] = useState(false);
  const [grid, setGrid] = useState(false);
  const RowFarmarr = []
  for (let i = 0; i < 10; i++) {
    RowFarmarr.push(<RowFarm key={i} />)
  }
  const RowCardFarmarr = []
  for (let i = 0; i < 10; i++) {
    RowCardFarmarr.push(<RowCardFarm key={i} />)
  }

  return (
    <div className="home">
      <Heading heading={"Farms"} brief={"The most advanced yield platform in the Kingdom."} />

      <div className="farmcontrol">
        <div className="farmright">
          <div className="farmview">
            <i className="fas fa-th-large" onClick={() => setGrid(true)} style={{ color: grid == true ? "#ddc5ab" : "#4f473d" }}></i>
            <i className="fas fa-th-list" onClick={() => setGrid(false)} style={{ color: grid == false ? "#ddc5ab" : "#4f473d" }}></i>
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


      <div style={{ position: "relative" }} className="farmcardblockouter">
        <div className="farmrowblockouter framelgbg" style={{ display: grid == true ? "none" : "block" }}>
          <div className="blur1"></div>
          <div className="farmrowblockinner">
            {RowFarmarr}
          </div>
          <div className="blur2"></div>
        </div>
        <div className="farmcardouter" style={{ display: grid == false ? "none" : "flex" }}>
          {RowCardFarmarr}
        </div>
      </div>
    </div>
  );
}


export default Farm;
