import React, { useState, useRef } from 'react'
import KingHeader from 'components/Header/KingHeader'

const Howworks: React.FC = () => {
    return (
        <div className="bgbxl homecards">
            <KingHeader heading={"How it works"} />
            <div className="infoouter">
                Spend RUPEE to bet, contributing to the wheel pot. Win prizes if the color of your bet matches with the
                winning color! <span>Read more, if you have any issue, please send us an email at team@hyruleswap.com</span>
            </div>
            <img src="images/hyrule/triangle.png" alt="tri" className="triangle" />
        </div>
    )
}

export default Howworks
