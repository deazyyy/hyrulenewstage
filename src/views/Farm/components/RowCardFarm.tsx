import React, { useState, useRef } from 'react'
import WithdrawModal from './Modals/WithdrawModal'
import DepositModal from './Modals/WithdrawModal'
import Controw from './Controw'
import UnlockButton from 'components/UnlockButton/UnlockButton'

const RowCardFarm: React.FC = () => {
    const [toggled, setToggled] = useState(true)
    const childRef = useRef(null);
    const depositRef = useRef(null);
    const handleOnClick = () => {
        if(childRef.current) {
            childRef.current.someExposedProperty();
        }
     }
    return (
        <>
            <div className="farmcardmain">
                <WithdrawModal  ref={childRef}/>
                <DepositModal ref={depositRef}/>
                <div className="farmrow">
                    <div className="farmrowcol farmrowcolicon">
                        <img src="images/hyrule/pair.png" className="pairicon"></img>
                        <h3>RUPEE-BUSD LP</h3>
                        <div className="green">No Fees, 40x</div>
                    </div>
                    <div className="farmcolcontent">
                        <Controw name={"APY"} value={"3.974.792.373,47%"} />
                        <Controw name={"APR"} value={"83.88%"} />
                        <Controw name={"Earn"} value={"RUPE"} />
                        <Controw name={"Earn"} value={"RUPE"} />
                        <Controw name={"deposit fee"} value={"0%"} />
                        <Controw name={"rupee earned"} value={"0"} color={"green"}/>
                    </div>
                    <div className="btnouter mb-3">
                        <button className="btn-main disabled" onClick={() => depositRef.current.someExposedProperty()}> Compound</button> 
                        <button className="btn-main disabled" onClick={handleOnClick}> Harvest</button>            
                    </div>
                    <UnlockButton background={"green"} width={"100%"}/>
                    <div className="details mt-3" onClick={() => setToggled(!toggled)}>
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
        </>
    )
}

export default RowCardFarm
