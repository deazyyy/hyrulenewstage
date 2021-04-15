import React, { useState, useRef } from 'react'

interface Props {
    amount: number
    players: number
    perc: number
    bordercolor: string
}

const Playerrow: React.FC<Props> = ({ amount, players, perc, bordercolor }) => {
    return (
        <div className="roulrow">
            <div className="lbordder" style={{ backgroundColor: bordercolor }} />
            <div >
                <img src="images/hyrule/gem.png" alt="tri" className="gem" />
                <div className="white">{amount}</div>
            </div>
            <div>
                {players} players
            </div>
            <div>
                {perc}%
            </div>
        </div>
    )
}

export default Playerrow
