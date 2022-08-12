import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../../css/rev.css";
import { Link, useHistory } from 'react-router-dom';
import "../../css/perfilrev.css"
import Follow from "../Follow/Follow";
import axios from "axios"
import { propTypes } from "react-bootstrap/esm/Image";

export default function ReviewCard() {
  let reviewArray = useSelector((state) => state.allReviews);

  const history = useHistory()
  

  const [user, setUser] = useState({})

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
  }, []);

  return (
    <div className="reCart">
      {reviewArray ? (
        reviewArray.map((r) => {
          return (
            <div key={r.id} className="reCa">
              <div className="carti">
                <div className="per">
                  <div className="peRe">
                    <Follow followers={r.user.followers} followings={r.user.followings} id={r.userId} meId={user.id}/>
                    <img src={r.user.userImg} alt="" />
                    <h4>{r.user.name}</h4>
                    <h5>{r.user.role}</h5>
                  </div>
                </div>
                <div className="rev">
                  <div className="titulo">
                    <p>Titulo</p>
                    <p>{r.title}</p>
                  </div>
                  <div className="califica">
                    <p>Calificación: {r.score}</p>
                  </div>
                  <div className="descri">
                    <p>Descripcion:</p>
                    <p className="reviewDescription">{r.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={style.revDiv}>
          <h2>¡Aún no hay reseñas!</h2>
          <h3>Se el primero en crear una!</h3>
          <Link to="/music">Descubre tu nueva canción favorita</Link>
        </div>
      )}
    </div>
  );
};
