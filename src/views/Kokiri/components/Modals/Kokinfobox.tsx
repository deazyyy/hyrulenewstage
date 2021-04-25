import React, { useState, useRef } from 'react'

interface Props{
    valuebx:number
    namebx:string
}

const Kokinfobox: React.FC<Props> = ({valuebx,namebx}) => {
    return (
        <div className="kokinfo">
            <div className="kokvalue">{valuebx}</div>
            {namebx}
        </div>
    )
}

export default Kokinfobox
