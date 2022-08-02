import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png"

export default function Nav(){
    return(
            <nav>
                <div className="logo">
                <a href="/home">
                    <img src={Logo} alt="logo"/>
                </a>
                </div>
                <ul>
                    <li>
                        <NavLink exact to="/">HOME</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink exact to="/">PREMIUM</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink exact to="/">CONTACT    </NavLink>
                    </li>
                </ul>
                <div className="login">
                    <ul>
                        <li>
                            <NavLink exact to="/">SIGN IN   </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink exact to="/">SING UP</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}