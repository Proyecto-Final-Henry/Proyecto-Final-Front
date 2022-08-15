import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

export default function NavigationB() {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg"  className='Nav nav_remusic'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <Link to="/" ><h5>Inicio</h5></Link>
                    <Link to="/premium"><h5>Planes</h5></Link>
                    <Link to="/contact"><h5>Contacto</h5></Link>
                </Nav>
                <Nav className='nav_btn_registro'>
                    <Link to="/login"><h5>Ingresa</h5></Link>
                    <Link to="/register"><h5 className="btn_registrate">Registrate</h5></Link>     
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
  );
};
