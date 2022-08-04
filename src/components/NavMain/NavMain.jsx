import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';

export default function NavigationM(){
    return(
        <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='Nav'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <div className="logo">
                        <Link to= "/feed">
                            <img src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <Link to= "/feed" ><h5>INICIO</h5></Link>
                </Nav>
                <Nav>
                    <SearchBar/>
                </Nav>
                <Nav>
                    <Link to="/user/1"><h5>PERFIL</h5></Link>
                    <Link to="/"><h5>LOGOUT</h5></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
    )
}