import React from 'react';
import ReactDOM from 'react-dom';

class Leftlayout extends React.Component {
  render() {
    return(
        <div className="left_layout styledpanelcss"> 
            
            <div className="header">
                <img src={'./images/logo.png'} className="llogo"/>
                <a href="#">Overview</a>
                {/* <div>
                    <a class="dropdown-toggle" data-toggle="dropdown">Trade</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Exchange</a>
                        <a class="dropdown-item" href="#">Liquidity</a>
                    </div>
                </div> */}
                <a href="#">Farms</a>
                <a href="#">Pools</a>
                <a href="#">Lottery</a>
                <a href="#">Shop</a>
                <a href="#">Info</a>
                <a href="#">IFO</a>
                <a href="#">More</a>
            </div>
        </div>
    );
  }
}

export default Leftlayout;
