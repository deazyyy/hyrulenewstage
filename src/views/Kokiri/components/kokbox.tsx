import React, { useState, useRef } from 'react'
import KokModal from './Modals/KokModal'

interface Kokboxprop {
    name: string
    val: number
}

const Kokbox: React.FC<Kokboxprop> = ({ name, val }) => {
    const childRef = useRef(null);
    return (
        <div className="kokbox">
            <KokModal ref={childRef}/>
            <img src="images/hyrule/kokgem.png" alt="kokiri gem" className="kokboximg" />
            <div>{name}</div>
            <button className="btn-main kokbtn" onClick={() => childRef.current.openModal()} >
                <img src="images/hyrule/gem.png" alt="kokiri gem" />
                {val}
            </button>
        </div>
    )
}

export default Kokbox
