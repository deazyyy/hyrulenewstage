import React, { useState, useRef } from 'react'
import KingHeader from 'components/Header/KingHeader'
import UnlockButton from 'components/UnlockButton/UnlockButton'

const Gambline: React.FC = () => {
    return (
        <div className="bgbxl homecards">
            <KingHeader heading={"KOKIRI SHOP"} />
            <div className="infoouter">
                <div className="rowouter ">
                    <div className="rowinner green">Your pending rewards</div>
                    <div className="rowinner dbrown">Locked</div>
                    <div className="rowinner green">~$0.00</div>
                </div>

                <div className="rowouter">
                    <div className="rowinner green">RUPEE needed before next spin</div>
                    <div className="rowinner dbrown">Locked</div>
                    <div className="rowinner green">~$0.00</div>
                </div>
            </div>
            <UnlockButton background={"green"}/>
        </div>
    )
}

export default Gambline
