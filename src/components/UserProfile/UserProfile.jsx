import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../css/users.css";
import ChangeProfileImg from "../ChangeProfileImg/ChangeProfileImg";
import Spinner from "react-bootstrap/Spinner";

export default function UserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const history = useHistory();
  const [user, setUser] = useState({});
  const [showImg, setShowImg] = useState(true);
  let precio = useSelector(state => state.price);
  console.log(precio);

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
      if (window.confirm("Seras redirigido a MercadoPago")) {
        const { data } = await axios.post(
          `/api/back-end/users/create_preference`,
          { description: "Premium", price: 1, quantity: 1 },
          config
        );
        window.open(data.id.sandbox_init_point); // sandbox_init_point
        history.push("/pay");
      }
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
    history.push("/");
  };

  return (
    <div>
      <div className="detailBac">
        <div className="detail">
          <div className="carta">
            {showImg ? (
              <div>
                {user.userImg ? (
                  <div className="pri">
                    <img src={user?.userImg} alt="userImg"></img>
                  </div>
                ) : (
                  <Spinner animation="border" variant="dark" />
                )}
                <br />
                <button onClick={handleShowImg}>📸</button>
              </div>
            ) : (
              <ChangeProfileImg userId={user.id} setShowImg={setShowImg} />
            )}
            {console.log(user)}
            <h3 className="userP">{user?.name}</h3>
            <p className="userP">{user?.email}</p>
            <p className="userP">Miembro desde {user?.createdDate}</p>
            <p className="userP">Usuario {user?.role}</p>
            <p className="userP">Seguidores: {user?.followers?.length}</p>
            <p className="userP">Seguidos: {user?.following?.length}</p>
            {user.role === "Gratuito" ? (
              <Button
                onClick={handleButton}
                variant="outline-success"
                type="submit"
                className="boton"
              >
                Cambiar a plan Premium
              </Button>
            ) : null}
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
            <Button
              onClick={cerrarSesion}
              variant="outline-danger"
              type="submit"
              className="boton"
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <Link to="/user/deactivate">
          <p>Desactivar cuenta</p>
        </Link>
      </div>
    </div>
  );
}
