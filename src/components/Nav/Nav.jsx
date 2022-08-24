import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo_remusic.png";
import { NavLink } from 'react-router-dom';

export default function NavigationB() {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg" className='Nav nav_remusic'>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className="logo">
                            <NavLink to="/">
                                <img src={Logo} alt="logo"/>
                            </NavLink>
                        </div>
                        <NavLink exact to="/"  ><h5>INICIO</h5></NavLink>
                        <NavLink to="/premium" ><h5>PLANES</h5></NavLink>
                        <NavLink to="/contact" ><h5>CONTACTO</h5></NavLink>
                    </Nav>

                    <Nav className='nav_btn_registro'>
                        <NavLink to="/login"><h5>INGRESA</h5></NavLink>
                        <NavLink to="/register"><h5 className="btn_registrate">REGISTRATE</h5></NavLink>     
                    </Nav>   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </nav>
  );
};
