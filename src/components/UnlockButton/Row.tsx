import React, { useState, useRef } from 'react'
import styled from 'styled-components'



interface Props {
    name?: string
    imgname?: string
}

const Button = styled.button`
    background:#6f553c;
    display:flex;
    justify-content:space-between;
    align-items:center;
    min-width:250px;
    border:0;
    padding:12px 10px;
    border-radius:12px;
    color:#fff;
    font-weight:400 !important;
    margin-bottom:10px;
    img{
        width:20px;
        border-radius:50%;
    }
`

const Row: React.FC<Props> = ({ name ,imgname}) => {

    return (
        <>
            <Button>
                {name}
                <img src={"images/hyrule/"+imgname+".png"} alt="icon"></img>
            </Button>
          
        </>
    )
}

export default Row



