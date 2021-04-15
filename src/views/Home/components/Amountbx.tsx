import React, { useState, useRef } from 'react'

interface Props{
    header: string
    middle:string
    bottom:string
}

const Amountbx: React.FC<Props> = ({header,middle,bottom}) => {
    return (
        <div className="bgbxl bgbxsm homecards">
            <div className="infoouter">
            <div className="rowouter dbrown ">
               {header}
            </div>
            <div className="rowouter green">
                <h3>{middle}</h3>
            </div>
            <div className="rowouter dbrown">
                {bottom}
            </div>
            </div>
        </div>
    )
}

export default Amountbx
