import React, { useState, useRef } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

interface Props {
    id:number
    name: string
    route:string
}

const MenuLink: React.FC<Props> = ({ name ,route,id}) => {
    return (
        <div className="menulinkouter">
            <Link to={"/" + route}><img src={"images/icons/ic"+id+".png"} />{name}</Link>
        </div>
    )
}

export default MenuLink
