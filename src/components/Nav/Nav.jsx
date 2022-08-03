import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"

export default function NavigationB() {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Nav'>
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="logo">
                        <Nav.Link>
                            <img src={Logo} alt="logo"/>
                        </Nav.Link>
                    </div>
                    <Nav.Link href="#features"><h5>HOME</h5></Nav.Link>
                    <Nav.Link href="#pricing"><h5>PREMIUM</h5></Nav.Link>
                    <Nav.Link href="#pricing"><h5>CONTACT</h5></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets"><h5>SING IN</h5></Nav.Link>
                    <Nav.Link href="#deets"><h5>SING UP</h5></Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
  );
}




// import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../img/logo.png"

// function Nav() {
    
//         return (
//             <nav>
//                 <div className="logo">
//                 <a href="/">
//                     <img src={Logo} alt="logo"/>
//                 </a>
//                 </div>
//                 <ul>
//                     <li>
//                         <NavLink exact to="/">HOME</NavLink>
//                     </li>
//                 </ul>
//                 <ul>
//                     <li>
//                         <NavLink exact to="/premium">PREMIUM</NavLink>
//                     </li>
//                 </ul>
//                 <ul>
//                     <li>
//                         <NavLink exact to="/contact">CONTACT    </NavLink>
//                     </li>
//                 </ul>
//                 <div className="login">
//                     <ul>
//                         <li>
//                             <NavLink exact to="/login">SIGN IN   </NavLink>
//                         </li>
//                     </ul>
//                     <ul>
//                         <li>
//                             <NavLink exact to="/register">SING UP</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         )
    
// }

// export default Nav;