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
                {/* <div>
                    <Link to="/">
                    <input  type="button" value="HOME"></input>
                    </Link>
                    <Link to="/premium">
                    <input  type="button" value="PREMIUM"></input>
                    </Link>
                    <Link to="/contact">
                    <input  type="button" value="CONTACT"></input>
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                    <input  type="button" value="SING IN"></input>
                    </Link>
                    <Link to="/register">
                    <input  type="button" value="SING UP"></input>
                    </Link>
                </div> */}
            </nav>
        )
    
}

export default Nav;