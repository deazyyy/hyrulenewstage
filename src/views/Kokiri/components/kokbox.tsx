import React, { useState, useRef } from 'react'

interface Kokboxprop {
    name: string
    val: number
}

const Kokbox: React.FC<Kokboxprop> = ({ name, val }) => {
    return (
        <div className="kokbox">
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>{name}</div>
            <button className="btn-main kokbtn">
                <img src="images/hyrule/gem.png" alt="kokiri gem" />
                {val}
            </button>
        </div>
    )
}

export default Kokbox
