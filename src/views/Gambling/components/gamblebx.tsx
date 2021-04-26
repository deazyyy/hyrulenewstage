import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Amount from '../Modals/Amount'

interface Props {
    color: string
}

const Box = styled.div`
  margin:0 6px;
  height:40px;
  border-radius:12px;
  width:100%;
  box-shadow:inset  0 4px 0px rgba(0,0,0,0.4);
  cursor:pointer
`
const Gamblebx: React.FC<Props> = ({ color }) => {
    const childRef = useRef(null);
    return (
        <>
            <Amount ref={childRef}/>
            <Box style={{background:color}} onClick={() => childRef.current.openModal()}/>
        </>
    )
}

export default Gamblebx
