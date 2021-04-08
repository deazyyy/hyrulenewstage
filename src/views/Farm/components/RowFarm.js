import React, { useState, useRef } from 'react'


const RowFarm: React.FC = () => {
    const [toggled, setToggled] = useState(true)
    return (
        <div className="farmrowmain">
            <div className="farmrow">
                <div className="farmrowcol farmrowcolicon">
                <img src="images/hyrule/pair.png" className="pairicon"></img>
                RUPEE-BUSD LP
                </div>
                <div className="farmrowcol">
                <h4>Earned</h4>
                ?                  
                </div>
                <div className="farmrowcol">
                <h4>Earned</h4>
                ?                  
                </div>
                <div className="farmrowcol">
                <h4>APR</h4>
                85.34%
                </div>
                <div className="farmrowcol">
                <h4>Liquidity</h4>
                $770,127,239                  
                </div>
                <div className="farmrowcol">
                <h4>Multiplier</h4>
                40x                
                </div>
                <div className="farmrowcol details" onClick={() => setToggled(!toggled)}>
                Details <i class="fas fa-angle-down"></i>               
                </div>
            </div>
            <div className="farmrowdetail" style={{display:toggled==true?"none":"flex"}}>
                <div className="farmrowcol farmrowcolcore green">
                Core
                </div>
                <div className="farmrowcol farmrowcolanchor green">
                    <div><a>Get CAKE-BNB LP</a> </div>
                    <div><a>View Contract</a></div>
                    <div><a>See Pair Info</a></div>             
                </div>
                <div className="farmrowcol farmrowcolearned">
                    <h4>RUPEE EARNED</h4>
                    <div>?</div>
                    <div><small>~0.000USD</small></div>             
                </div>
                <div className="farmrowcol">
                    <a className="btn-main" disabled> Harvest</a>             
                </div>
                <div className="farmrowcol">
                    <a className="btn-main btngreen">Unlock Wallet</a>     
                </div>
                
            </div>
        </div>
    )
}

export default RowFarm
