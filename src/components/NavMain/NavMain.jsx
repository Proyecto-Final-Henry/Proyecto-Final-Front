import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo.png"
import { Link, useHistory } from 'react-router-dom';

export default function NavigationM(){
    const history = useHistory();

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        history.push("/");
    };

    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" className='Nav nav_remusic'>
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
                        <Link to="/user"><h5>PERFIL</h5></Link>
                        <Link to="/search"><h5>BUSCAR</h5></Link>
                        <Link to="/music"><h5>MÚSICA</h5></Link>
                        <Link to="/genres"><h5>GÉNEROS</h5></Link>
                        <Link to="/chat"><h5>CHAT</h5></Link>
                    </Nav>
                    <Nav className='nav_btn_registro'>
                        <button style={{marginTop: "6px", "color":"white"}} className="btn_registrate" onClick={cerrarSesion} variant="outline-danger" type="submit">Cerrar Sesión</button>
                    </Nav>   
                    </Navbar.Collapse>
                </Container>
         </Navbar>
        </nav>
      );    
};
