import React, {useState } from 'react';
import { menuitems } from '../config'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import MenuLink from '../MenuLink/'

interface Props{
    setShowMenu: (active: boolean) => void;
}

const Panel: React.FC<Props> = ({setShowMenu}) => {  

    return (
        <div className="header">
            <img src={'./images/hyrule/logo.png'} className="navlogo" />
            {menuitems.map(items => (
                items.accordion ?
                    <div className="menulinkouter">
                        <Link to="/" data-toggle="collapse" data-target={"#menuacc" + items.id}><img src={"images/icons/ic" + items.id + ".png"} />{items.name} <i className="fas fa-angle-down"></i></Link>
                        <div className="menulinkinner collapse" id={"menuacc" + items.id}>
                            {items.accordions.map(item => (
                                <a href={item.href} onClick={ ()=>setShowMenu(true)}>{item.name}</a>
                            ))}
                        </div>
                    </div> :
                    <MenuLink name={items.name} route={items.route} id={items.id} key={items.id}  setShowMenu={setShowMenu}/>
            ))}


        </div>
    )
}

export default Panel
