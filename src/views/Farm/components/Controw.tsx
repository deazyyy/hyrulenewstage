import React, { useState, useRef } from 'react'


interface Prop {
    name: string
    value: string
    color?:string
}

const Controw: React.FC<Prop> = ({name,value,color}) => {
    return (
        <div className={"controw " + color}>
            <div className={color}>{name} :</div>
            <div>{value}</div>
        </div>
    )
}

export default Controw
