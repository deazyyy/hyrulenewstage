import React, { useState, useRef } from 'react'
import styled from 'styled-components'


interface Props {
    color: string
}
const Box = styled.div`
    margin:0 6px;
    height:40px;
    width:40px;
    box-shadow: 0 -3px 0px rgba(0,0,0,0.2) ;
    border-radius:50%;
`
const Gamblecrcl: React.FC<Props> = ({ color }) => {
    return (
        <Box style={{background:color}}/>
    )
}

export default Gamblecrcl
