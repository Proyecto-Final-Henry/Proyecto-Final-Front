import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.png"

function Nav() {
    
        return (
            <nav>
                <div className="logo">
                <a href="/">
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
                        <NavLink exact to="/premium">PREMIUM</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink exact to="/contact">CONTACT    </NavLink>
                    </li>
                </ul>
                <div className="login">
                    <ul>
                        <li>
                            <NavLink exact to="/login">SIGN IN   </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink exact to="/register">SING UP</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    
}

export default Nav;