import React, { useState, useRef } from 'react'

interface Props{
    heading: string
}

const KingHeader: React.FC<Props> = ({heading}) => {
    return (
        <div className="headingouterot">
            <div className="headingouter">
                <h4>{heading}</h4>
            </div>
        </div>
    )
}

export default KingHeader
