import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"
import { Link, useHistory } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';
import Button from 'react-bootstrap/Button';

export default function NavigationM(){
    const history = useHistory()

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        history.push("/")
    }

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
                    <Link to="/user"><h5>PERFIL</h5></Link>
                    <Button onClick={cerrarSesion} variant="outline-danger" type="submit">Cerrar Sesión</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </nav>
    )
}