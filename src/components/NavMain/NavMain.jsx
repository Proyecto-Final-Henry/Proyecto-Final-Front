import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../img/logo_remusic.png";
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getUserData } from '../../redux/actions';
import { FaRegBell } from "react-icons/fa";
import { socket } from '../../App';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../../css/nav.module.css'

export default function NavigationM(){
    const history = useHistory();
    let dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState([]);

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
    useEffect(() => {
        console.log(socket)
        socket.on("getNotification", (data) => {
          console.log(data)
          setNotifications((prev) => [...prev, data]);
        });
      }, [socket]);
      const displayNotification = ({ senderName, type, title }) => {
        let action;
    
        if (type === 1) {
          action = "gustado";
        } else if (type === 2) {
          action = "commented";
        } else {
          action = "shared";
        }
        return (
          <span className="notification">{`A ${senderName} le ha ${action} tu reseña ${title}.`}</span>
        );
      };
      const handleRead = () => {
        setNotifications([]);
        setOpen(false);
      };    

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        history.push("/");
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className={style.nav_remusic}>
                <div className={style.container_nav}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className={style.centerItems} >
                            <Link className={style.resetMarPadd} to= "/feed">
                                <img style={{height:"48px"}} src={Logo} alt="logo"/>
                            </Link>
                        </div>
                        <NavLink to= "/feed" ><h5>INICIO</h5></NavLink>
                        <NavLink to="/user"><h5>PERFIL</h5></NavLink>
                        <NavLink to="/search"><h5>BUSCAR</h5></NavLink>
                        <NavLink to="/music"><h5>MÚSICA</h5></NavLink>
                        <NavLink to="/genres"><h5>GÉNEROS</h5></NavLink>
                        <NavLink to={`/playlist/${user?.id}`}><h5>PLAYLIST</h5></NavLink>
                        {user.role === "Gratuito" ? null : <Link to="/chat"><h5>CHAT</h5></Link> }
                    </Nav>
                        {/* <NavDropdown id="basic-nav-dropdown" title={<FaRegBell/>}>
                        <NavDropdown.ItemText>
                                <div className="notifications">
                                    {notifications.map((n) => displayNotification(n))}
                                    <button className="nButton" onClick={handleRead}>
                                        Marcar como leído
                                    </button>
                                </div>
                        </NavDropdown.ItemText>
                        </NavDropdown> */}
                    {/* <Nav>
                        <div className="noti">
                            <div className="icon" onClick={() => setOpen(!open)}>
                                    <FaRegBell/>
                                    {
                                    notifications.length >0 &&
                                    <div className="counter">{notifications.length}</div>
                                    }
                                    </div>
                                    {open && (
                                    <div className="notifications">
                                    {notifications.map((n) => displayNotification(n))}
                                    <button className="nButton" onClick={handleRead}>
                                        Marcar como leído
                                    </button>
                                </div>
                            )}
                        </div>
                    </Nav> */}
                        <Nav className='nav_btn_registro'>
                            <button style={{marginTop: "6px", "color":"white"}} className="btn_registrate" onClick={cerrarSesion} variant="outline-danger" type="submit">Cerrar Sesión</button>
                        </Nav>  
                    </Navbar.Collapse>
                </div>
         </Navbar>
        </div>
      );    
};
