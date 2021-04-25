import React, { useState, useRef } from 'react'

interface Props{
    heading: string
    font?:string
}

const KingHeader: React.FC<Props> = ({heading,font}) => {
    return (
        <div className="headingouterot">
            <div className="headingouter">
                <h4 style={{fontSize:font}}>{heading}</h4>
            </div>
        </div>
    )
}

export default KingHeader
