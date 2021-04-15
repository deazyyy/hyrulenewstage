import React, { useState, useRef } from 'react'

const Stats: React.FC = () => {
    return (
        <div className="bgbxl bgbxsm homecards">
            <h2 className="dbrown">Rupee Stats</h2>
            <div className="infoouter">
                <div className="rowouter dbrown">
                    <div className="rowinner">Total RUPEE Supply</div>
                    <div className="rowinner">502,297</div>
                </div>
                <div className="rowouter dbrown">
                    <div className="rowinner">Total RUPEE Burned</div>
                    <div className="rowinner">73,041</div>
                </div>
                <div className="rowouter dbrown">
                    <div className="rowinner">Total RUPEE/Block</div>
                    <div className="rowinner">1</div>
                </div>
            </div>
        </div>
    )
}

export default Stats
