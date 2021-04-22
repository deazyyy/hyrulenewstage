import React, { useState, useRef } from 'react'
import styled from 'styled-components'

interface Props {
    color: string
}

const Box = styled.div`
  margin:0 6px;
  height:40px;
  border-radius:12px;
  width:100%;
  box-shadow:inset  0 4px 0px rgba(0,0,0,0.4)  
`
const Gamblebx: React.FC<Props> = ({ color }) => {
    return (
        <Box style={{background:color}}/>
    )
}

export default Gamblebx
