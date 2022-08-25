//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import "../../css/users.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOtherUser } from "../../redux/actions/index";
import Follow from "../Follow/Follow";
import Nav from 'react-bootstrap/Nav';
import ReviewCard from "./MyReview";
import OtherReviews from "./OtherReviews";
import OtherPlaylist from "./OtherPlaylist.jsx";

export default function OtherUserProfile() {
  //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params
  const user = useSelector((state) => state.otherUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [meUser, setMeUser] = useState({});
  const { id } = useParams();

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
        setMeUser(data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    autenticarUsuario();
    dispatch(getOtherUser(id));
  }, [dispatch, id]);


  return (
    <div  className="pepe" style={{position: "relative"}}>
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
      <OtherReviews userId={user.id} name={user.name}/>
      <div className="play">
      <div className="play">{user.id && <OtherPlaylist userId={user.id} />}</div>
      </div>
    </div>
  );
}

