import React, { useState, useRef } from 'react'
import AfterUnlockRow from './AfterUnlockRow'
import Gamblebx from './gamblebx'
import Gamblecrcl from './gamblecrcl'

const AfterUnlock: React.FC = () => {
    return (
        <div className="afterunlock">
            <div className="Rowmain">
                <div className="Rowouter box">
                    <AfterUnlockRow heading={"Left before spin"} value={"224 RUPEE"} />
                    <AfterUnlockRow heading={" Your total bets"} value={"0"} />

                    <div className="d-flex align-items-center justify-content-between">
                        <AfterUnlockRow heading={" Rewards to claim"} value={"0"} />
                        <a className="btn-main btnbrown" style={{ height: "auto" }}>Claim</a>
                    </div>
                </div>
                <div className="Rowouter ">
                    <div className="box">
                        <h2 style={{ textAlign: "center" }}>
                            Gamble
                        </h2>
                        <div className="d-flex">
                            <Gamblebx color={"#cf9737"}/>
                            <Gamblebx color={"#554137"}/>
                            <Gamblebx color={"#393533"}/>
                        </div>
                    </div>
                    <div className="box">
                        <h2 style={{ textAlign: "center" }}>
                            Latest 5 spins
                        </h2>
                        <div className="d-flex justify-content-around">
                            <Gamblecrcl color={"#554137"}/>
                            <Gamblecrcl color={"#393533"}/>
                            <Gamblecrcl color={"#cf9737"}/>
                            <Gamblecrcl color={"#554137 "}/>
                            <Gamblecrcl color={"#393533"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AfterUnlock
