import React, { useState, useRef } from 'react'

interface Props {
    heading: string
    brief: string
}

const Header: React.FC<Props> = ({ heading, brief }) => {
    return (
        <div className="homemainheading">
            <div className="text homeheading">
                <img src="images/hyrule/ribbonbg.png" alt="img" />
                <div>{heading}</div>
            </div>
            <div className="lgraycolor">{brief}</div>
        </div>
    )
}

export default Header
