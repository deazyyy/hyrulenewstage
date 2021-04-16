import React, { useState, useRef } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

interface Props {
    id: number
    name: string
    route: string
    setShowMenu: (active: boolean) => void;
}

const Panel: React.FC<Props> = ({ name, route, id ,setShowMenu}) => {
    const location = useLocation();
    return (
        <div className="menulinkouter">
            <Link to={route} onClick={ ()=>setShowMenu(true)}><img src={"images/icons/ic" + id + ".png"}  />{name}</Link>
        </div>
    )
}

export default Panel
