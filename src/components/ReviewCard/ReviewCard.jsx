import React from "react";
import { useSelector } from "react-redux";
import style from "../../css/premium.module.css";
import { Link } from 'react-router-dom';
import PerfilRev from './PerfilRev'

export default function ReviewCard() {
  let reviewArray = useSelector((state) => state.allReviews);
  console.log(reviewArray)
  return (
    <div>
      {reviewArray ? (
        reviewArray.map((r) => {
          return (
            <div key={r.id}>
              <div className="per">
                <PerfilRev/>
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
                  <p>Descripción:</p>
                  <p className="reviewDescription">{r.description}</p>
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
