import React, { useState, useRef } from 'react'


interface Props {
    heading: string
    value: string
}
const AfterUnlockRow: React.FC<Props> = ({ heading, value }) => {
    return (
        <div className="mb-2">
            <h2>
                {heading}
            </h2>
            {value}
        </div>
    )
}

export default AfterUnlockRow
