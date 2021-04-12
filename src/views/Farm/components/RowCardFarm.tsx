import React, { useState, useRef } from 'react'


const RowCardFarm: React.FC = () => {
    const [toggled, setToggled] = useState(true)
    return (
        <div className="farmcardmain">
            <div className="farmrow">
                <div className="farmrowcol farmrowcolicon">
                    <img src="images/hyrule/pair.png" className="pairicon"></img>
                    <h3>RUPEE-BUSD LP</h3>
                    <div className="green">No Fees, 40x</div>
                </div>
                <div className="farmcolcontent">
                    <div className="controw">
                        <div>APY:</div>
                        <div>3.974.792.373,47%</div>
                    </div>
                    <div className="controw">
                        <div>APR:</div>
                        <div>83.88%</div>
                    </div>
                    <div className="controw">
                        <div>Earn:</div>
                        <div>RUPE</div>
                    </div>
                    <div className="controw">
                        <div>deposit fee:</div>
                        <div>0%</div>
                    </div>
                    <div className="controw green">
                        <div className="green">rupee earned:</div>
                        <div>0</div>
                    </div>
                </div>
                <div className="btnouter">
                    <a className="btn-main disabled"> Compound</a> 
                    <a className="btn-main disabled"> Harvest</a>            
                </div>
                <a className="btn-main btngreen">Unlock Wallet</a>    
                <div className="details" onClick={() => setToggled(!toggled)}>
                Details                
                </div>
            </div>
            <div className="farmrowdetail" style={{display:toggled==true?"none":"block"}}>
                <div className="controw">
                    <div>deposit fee:</div>
                    <div>0%</div>
                </div>
                <div className="green">
                    <div><a>Get CAKE-BNB LP</a> </div>
                    <div><a>View Contract</a></div>
                    <div><a>See Pair Info</a></div>             
                </div>
            
                
            </div>
        </div>
    )
}

export default RowCardFarm
