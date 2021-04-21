import React, { useState, useRef } from 'react'


const AfterUnlock: React.FC = () => {
    return (
       <div className="afterunlock">
           <div className="Rowmain">
                <div className="Rowouter box">
                    <div className="mb-2">
                        <h2>
                            Left before spin
                        </h2>
                        224 RUPEE
                    </div>
                    <div className="mb-2">
                        <h2>
                        Your total bets
                        </h2>
                        0
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="mb-2">
                            <h2>
                            Rewards to claim
                            </h2>
                            0
                        </div>
                        <a className="btn-main btnbrown"  style={{height:"auto"}}>Claim</a>
                    </div>
                </div>
                <div className="Rowouter ">
                    <div className="box">
                        <h2 style={{textAlign:"center"}}>
                            Gamble
                        </h2>
                    </div>
                    <div className="box">
                        <h2 style={{textAlign:"center"}}>
                            Latest 5 spins
                        </h2>
                    </div>
                    
                </div>
           </div>
       </div>
    )
}

export default AfterUnlock
