import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo_remusic.png";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getUserData } from '../../redux/actions';

export default function NavigationM(){
    const history = useHistory();
    let dispatch = useDispatch();
    const [user, setUser] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                history.push("/login");
                return;
            }
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const { data } = await axios(`/api/back-end/users/perfil`, config);
                dispatch(getUserData(data?.id))
                setUser(data);
            } catch (error) {
                console.log(error.response.data.msg);
            };
        };
        autenticarUsuario();
    },[])

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
                        <div className="logoN">
                            <Link to= "/feed">
                                <img style={{height:"48px"}} src={Logo} alt="logo"/>
                            </Link>
                        </div>
                        <Link to= "/feed" ><h5>INICIO</h5></Link>
                        <Link to="/user"><h5>PERFIL</h5></Link>
                        <Link to="/search"><h5>BUSCAR</h5></Link>
                        <Link to="/music"><h5>MÚSICA</h5></Link>
                        <Link to="/genres"><h5>GÉNEROS</h5></Link>
                        <Link to={`/playlist/${user?.id}`}><h5>PLAYLIST</h5></Link>
                        {user.role === "Gratuito" ? null : <Link to="/chat"><h5>CHAT</h5></Link> }
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
