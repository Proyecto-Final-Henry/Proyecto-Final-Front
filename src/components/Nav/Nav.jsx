import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

export default function NavigationB() {
  return (
    <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Nav'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <Link to="/" ><h5>INICIO</h5></Link>
                    <Link to="/premium"><h5>PREMIUM</h5></Link>
                    <Link to="/contact"><h5>CONTACTO</h5></Link>
                </Nav>
                <Nav>
                    <Link to="/login"><h5>INGRESA</h5></Link>
                    <Link to="/register"><h5>REGISTRATE</h5></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
  );
};
