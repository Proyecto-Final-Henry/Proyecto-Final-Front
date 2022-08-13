//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../../css/users.css";
import ChangeProfileImg from "../ChangeProfileImg/ChangeProfileImg";

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
          if (window.confirm("Seras redirigido a MercadoPago")) {
            const { data } = await axios.post(`/api/back-end/users/create_preference`, {description: "Premium", price: 1, quantity: 1}, config)
            window.open(data.id.init_point);   // sandbox_init_point
            history.push("/pay");
          }
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
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios(`/api/back-end/users/perfil`, config);
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
    <div className="detailBac">
      <div className="detail">
        <div className="carta">
          {showImg ? (
            <div>
              <img src={user.userImg} alt="userImg"></img>
              <button onClick={handleShowImg}>📸</button>
            </div>
          ) : (
            <ChangeProfileImg userId={user.id} setShowImg={setShowImg} />
          )}
          <h3 className="userP">{user?.name}</h3>
          <p className="userP">{user?.email}</p>
          <p className="userP">Miembro desde {user?.createdDate}</p>
          <p className="userP">Usuario {user?.role}</p>
          {user.role === "Base" ? (
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
  );
}
