//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../css/users.css";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import ChangeProfileImg from "../ChangeProfileImg/ChangeProfileImg";
import Spinner from "react-bootstrap/Spinner";
import MyReview from "./MyReview";
import loading from "../../assets/loading.gif";
import MyPlaylist from "./MyPlaylist.jsx"
import Modal from "../Modal/Modal";
import { useModal } from "../Modal/useModal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function UserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const history = useHistory();
  const [user, setUser] = useState({});
  const [showImg, setShowImg] = useState(true);
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);
  const [isOpenAlert1, openAlert1, closeAlert1] = useModal(false);
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
    }
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
  console.log(user)
  
  const handleSeg = (type) => {
    if (type===1) {
      openAlert1()
    }else{
      openAlert()
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("active");
    history.push("/");
  };

  return (
    <div className="pepe" style={{ position: "relative" }}>
      <div
        className="modal fade"
        id="MercadoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="MercadoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="MercadoModalLabel">
                Pago Premium
              </h5>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                X{" "}
              </button>
            </div>
            <div className="modal-body">
              <h4>Seras redirigido a MercadoPago</h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-success"
                data-dismiss="modal"
                onClick={handleButton}
                data-toggle="modal"
                data-target="#Mercado2Modal"
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
              >
                Cerrar
              </button>
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
    {/* <div className="carda">
      <div className="img">
          {showImg ? (
              <div className="hov">
                    <img src={user?.userImg} alt="userImg"></img>
                    <button onClick={handleShowImg} className="bo">📸</button>
                  <button onClick={handleShowImg} className="bo">📸</button>
              </div>
            ) : (
              <ChangeProfileImg userId={user.id} setShowImg={setShowImg} />
            )}
      </div>
      <div className="carda">
{user?.userImg? 
        <div>
        {showImg ? (
          <div className="hov">
            <div className="pri">
              <div className="img">
                <img src={user?.userImg} alt="userImg"></img>
              </div>
              <button onClick={handleShowImg} className="bo">
                📸
              </button>
            </div>
          </div>
        ) : (
          <ChangeProfileImg userId={user.id} setShowImg={setShowImg} />
        )}
        <div className="content">
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
          <p>Usuario {user?.role}</p>
          <p>Miembro desde {user?.createdDate}</p>
          <div className="center">
              <div className="box">
                <p>{user?.following?.length}</p>
                <p className="userP" onClick={() => handleSeg(1)}>Seguidos</p>
                { user?.role === "Premium"?(
                  <Modal isOpen={isOpenAlert1} onClose={closeAlert1} className="modal_body">
                  <h4>Eres Un Usuario Gratuito</h4>
                  <br />
                  <h4>Pasate a Premium para ver tus Seguidos</h4>
                  </Modal>):
                  <Modal isOpen={isOpenAlert1} onClose={closeAlert1} className="modal_body">
                    <div className="moH3">
                      <h3>Seguidos:</h3>
                      {user.following?.length > 0 ? (
                        user.following?.map((f) => {
                          return (
                            <div className="seTo">
                              <Link to={`/users/${f.id}`}>
                                <div className="seTo">
                                  <div className="sim">
                                    <img src={f.userImg} alt="userImg"></img>
                                  </div>
                                  <div className="seNa">
                                    <p>{f.name}</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })
                      ) : (
                        <p>Todavia no sigues a nadie</p>
                      )}
                    </div>
                  </Modal>
                }
              </div>
              <div className="box">
                <p>{user?.followers?.length}</p>
                <p className="userP" onClick={() => handleSeg()}>Seguidores</p>
                {
                  user?.role === "Premium"?(
                  <Modal isOpen={isOpenAlert} onClose={closeAlert} className="modal_body">
                  <h4>Eres Un Usuario Gratuito</h4>
                  <br />
                  <h4>Pasate a Premium para ver tus seguidores</h4>
                  </Modal>):
                  <Modal isOpen={isOpenAlert} onClose={closeAlert} className="modal_body">
                  <div className="moH3">
                    <h3>Seguidores</h3>
                    {user.followers?.length > 0 ? (
                      user.followers?.map((f) => {
                        return (
                          <div className="seTo">
                            <Link to={`/users/${f.id}`}>
                              <div className="seTo">
                                <div className="sim">
                                  <img src={f.userImg} alt="userImg"></img>
                                </div>
                                <div className="seNa">
                                  <p>{f.name}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="nada">
                        <p>Todavia no tienes seguidores</p>
                      </div>
                    )}
                  </div>
                  </Modal>
                }
              </div>
        </div>
<<<<<<< HEAD
        </div> 
        :
      <div className="spi">
        <Spinner animation="border" variant="dark" />
      </div>
      }
      </div>
=======
        <br />
        <Nav className='nav_btn_registro'>
            <button style={{marginTop: "6px", "color":"white"}} className="btn_registrate" onClick={cerrarSesion} variant="outline-danger" type="submit">Cerrar Sesión</button>
        </Nav> 
        <br />
        {user.role === "Gratuito" ? <span><button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#MercadoModal"> Cambiar a plan Premium </button> <br /> </span> : null}
        <br />
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          ...
        </Dropdown.Toggle>
>>>>>>> 2060b11bcd695dab776ed04d6f3e94c69b37d5ba

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-3">{user.role === "Admin" ? (<Button onClick={handleAdmin} variant="outline-info" type="submit" className="boton">Panel de administrador</Button>) : null}</Dropdown.Item>
          <Dropdown.Item href="#/action-4"><Link to="/user/deactivate"><Button variant="outline-info" type="submit" className="boton">Desactivar cuenta</Button></Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    </div> */}
      <div className="detailBac">
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
              <p>{user?.following?.length}</p>
                <p className="userP" onClick={() => handleSeg(1)}>Seguidos</p>
                { user?.role === "Premium"?(
                  <Modal isOpen={isOpenAlert1} onClose={closeAlert1} className="modal_body">
                  <h4>Eres Un Usuario Gratuito</h4>
                  <br />
                  <h4>Pasate a Premium para ver tus Seguidos</h4>
                  </Modal>):
                  <Modal isOpen={isOpenAlert1} onClose={closeAlert1} className="modal_body">
                    <div className="moH3">
                      <h4>Seguidos:</h4>
                      {user.following?.length > 0 ? (
                        user.following?.map((f) => {
                          return (
                            <div className="seTo">
                              <Link to={`/users/${f.id}`}>
                                <div className="seTo">
                                  <div className="sim">
                                    <img src={f.userImg} alt="userImg"></img>
                                  </div>
                                  <div className="seNa">
                                    <p style={{"color": "black"}}>{f.name}</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })
                      ) : (
                        <p>Todavia no sigues a nadie</p>
                      )}
                    </div>
                  </Modal>
                }
              </div>
              <div className="box">
              <p>{user?.followers?.length}</p>
                <p className="userP" onClick={() => handleSeg()}>Seguidores</p>
                {
                  user?.role === "Premium"?(
                  <Modal isOpen={isOpenAlert} onClose={closeAlert} className="modal_body">
                  <h4>Eres Un Usuario Gratuito</h4>
                  <br />
                  <h4>Pasate a Premium para ver tus seguidores</h4>
                  </Modal>):
                  <Modal isOpen={isOpenAlert} onClose={closeAlert} className="modal_body">
                  <div className="moH3">
                    <h4>Seguidores</h4>
                    {user.followers?.length > 0 ? (
                      user.followers?.map((f) => {
                        return (
                          <div className="seTo">
                            <Link to={`/users/${f.id}`}>
                              <div className="seTo">
                                <div className="sim">
                                  <img src={f.userImg} alt="userImg"></img>
                                </div>
                                <div className="seNa">
                                  <p style={{"color": "black"}}>{f.name}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="nada">
                        <p>Todavia no tienes seguidores</p>
                      </div>
                    )}
                  </div>
                  </Modal>
                }
              </div>
            </div>
            <Button onClick={cerrarSesion} variant="outline-danger" type="submit" className="boton">Cerrar Sesión</Button>
            <br />
            {user.role === "Gratuito" ? <span><button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#MercadoModal"> Cambiar a plan Premium </button> <br /> </span> : null}
            <br />
            <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              ...
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-3">{user.role === "Admin" ? (<Button onClick={handleAdmin} variant="outline-info" type="submit" className="boton">Panel de administrador</Button>) : null}</Dropdown.Item>
              <Dropdown.Item href="#/action-4"><Link to="/user/deactivate"><Button variant="outline-info" type="submit" className="boton">Desactivar cuenta</Button></Link></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <div>
      </div>
          </div>
        </div>
      </div>
      <MyReview />
      <div className="play">{user.id && <MyPlaylist userId={user.id} />}</div>
    </div>
  );
}
