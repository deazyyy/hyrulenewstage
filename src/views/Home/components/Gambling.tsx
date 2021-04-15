import React, { useState, useRef } from 'react'
import KingHeader from 'components/Header/KingHeader'

const Gambline: React.FC = () => {
    return (
        <div className="bgbxl homecards">
            <KingHeader heading={"KOKIRI SHOP"} />
            <div className="infoouter">
                <div className="rowouter green">
                    <div className="rowinner">Your pending rewards</div>
                    <div className="rowinner">RUPEE needed before next spin</div>
                </div>
                <div className="rowouter dbrown">
                    <div className="rowinner">Locked</div>
                    <div className="rowinner">Locked</div>
                </div>
                <div className="rowouter green">
                    <div className="rowinner">~$0.00</div>
                    <div className="rowinner">~$0.00</div>
                </div>
            </div>
            <button className="btn-main btngreen">Unlock Wallet</button>
        </div>
    )
}

export default Gambline
