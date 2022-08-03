import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';

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
                    <Link to="/home" ><h5>HOME</h5></Link>
                    <Link to="/premium"><h5>PREMIUM</h5></Link>
                    <Link to="/contact"><h5>CONTACT</h5></Link>
                </Nav>
                <SearchBar/>
                <Nav>
                    <Link to="/login"><h5>SING IN</h5></Link>
                    <Link to="/register"><h5>SING UP</h5></Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
  );
}
