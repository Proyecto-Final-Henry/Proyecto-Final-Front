//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../css/users.css";
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import ChangeProfileImg from "../ChangeProfileImg/ChangeProfileImg";
import Spinner from "react-bootstrap/Spinner";
import MyReview from "./MyReview";
import loading from "../../assets/loading.gif";

export default function UserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const history = useHistory();
  const [user, setUser] = useState({});
  const [showImg, setShowImg] = useState(true);

  let handleAdmin = () => {
    history.push("/admin");
  };

  const handleButton = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
        const { data } = await axios.post(
          `/api/back-end/users/create_preference`,
          { description: "Premium", price: 1, quantity: 1 },
          config
        );
        window.open(data.id.sandbox_init_point); // sandbox_init_point
    } catch (error) {
      console.log(error);
    };
  };

  const handleShowImg = (e) => {
    e.preventDefault();
    setShowImg(false);
  };

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const active = localStorage.getItem("active");
      if (active === "false") {
        history.push("/user/restore");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios(`/api/back-end/users/perfil`, config);
        if (!data.active) {
          return history.push("/user/restore");
        }
        setUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
  }, [showImg]);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("active");
    history.push("/");
  };

  return (
    <div  className="pepe" style={{position: "relative"}}>
      <div className="modal fade" id="MercadoModal" tabIndex="-1" role="dialog" aria-labelledby="MercadoModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="MercadoModalLabel">Pago Premium</h5>
                                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h4>
                                            Seras redirigido a MercadoPago
                                        </h4>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-success" data-dismiss="modal" onClick={handleButton} data-toggle="modal" data-target="#Mercado2Modal">Ok</button>
                                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>

                     <div className="modal fade" id="Mercado2Modal" tabIndex="-1" role="dialog" aria-labelledby="MercadoModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="MercadoModalLabel">Pago Premium</h5>
                                        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h4>
                                            Procesando tu pago...
                                        </h4>
                                        <img style={{heigth:"250px", width:"350px"}} src={loading} alt="cargando..." />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
    <div className="carda">
      <div className="img">
        <img src={user?.userImg} alt="userImg"></img>
      </div>
      <div className="content">
        <h3>{user?.name}</h3>
          <p>{user?.email}</p>
          <p>Usuario {user?.role}</p>
          <p >Miembro desde {user?.createdDate}</p>
          <div className="center">
              <div className="box">
                <p>{user?.followers?.length}</p>
                <p className="userP">Seguidores</p>
              </div>
              <div className="box">
                <p>{user?.following?.length}</p>
                <p className="userP">Seguidos</p>
              </div>
        </div>
        <br />
        <Nav className='nav_btn_registro'>
            <button style={{marginTop: "6px", "color":"white"}} className="btn_registrate" onClick={cerrarSesion} variant="outline-danger" type="submit">Cerrar Sesión</button>
        </Nav> 
        <br />
        {user.role === "Gratuito" ? <span><button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#MercadoModal"> Cambiar a plan Premium </button> <br /> </span> : null}
      </div>
    </div>


      {/* <div className="detailBac">
        <div className="detail">
          <div className="carta">
            {showImg ? (
              <div className="hov">
                  <div className="pri">
                    <img src={user?.userImg} alt="userImg"></img>
                    <br />
                    <br />
                    <button onClick={handleShowImg} className="bo">📸</button>
                  </div>
                  <button onClick={handleShowImg} className="bo">📸</button>
              </div>
            ) : (
              <ChangeProfileImg userId={user.id} setShowImg={setShowImg} />
            )}
            <h3 className="userP">{user?.name}</h3>
            <p className="userP">{user?.email}</p>
            <p className="userP">Usuario {user?.role}</p>
            <p className="userP">Miembro desde {user?.createdDate}</p>
            <div className="center">
              <div className="box">
                <p>{user?.followers?.length}</p>
                <p className="userP">Seguidores</p>
              </div>
              <div className="box">
                <p>{user?.following?.length}</p>
                <p className="userP">Seguidos</p>
              </div>
            </div>
            <Button onClick={cerrarSesion} variant="outline-danger" type="submit" className="boton">Cerrar Sesión</Button>
            <br />
            {user.role === "Gratuito" ? <span><button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#MercadoModal"> Cambiar a plan Premium </button> <br /> </span> : null}
            {user.role === "Admin" ? (
              <Button
                onClick={handleAdmin}
                variant="outline-info"
                type="submit"
                className="boton"
              >
                Panel de administrador
              </Button>
              
            ) : null}
            <br />
            <br />
            <div>
          <Link to="/user/deactivate">
            <p>Desactivar cuenta</p>
          </Link>
      </div>
          </div>
        </div>
      </div> */}

      {/* <div>
        <h3>Seguidores:</h3>
        {user.followers?.length > 0 ? (
          user.followers?.map((f) => {
            return (
              <div>
                <Link to={`/users/${f.id}`}>
                  <img src={f.userImg} alt="userImg"></img>
                  <p>{f.name}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Todavia no tienes seguidores</p>
        )}
      </div> */}
      {/* <div>
        <h3>Seguidos:</h3>
        {user.following?.length > 0 ? (
          user.following?.map((f) => {
            return (
              <div>
                <Link to={`/users/${f.id}`}>
                  <img src={f.userImg} alt="userImg"></img>
                  <p>{f.name}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>Todavia no sigues a nadie</p>
        )}
      </div> */}
      <MyReview/>
      <div className="play">
        <h1>Aqui van las playlist</h1>
      </div>
    </div>
  );
};
