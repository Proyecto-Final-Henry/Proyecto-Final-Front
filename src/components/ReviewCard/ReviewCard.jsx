import React from "react";
import { useSelector } from "react-redux";
import style from "../../css/premium.module.css";
import { Link } from 'react-router-dom';

export default function ReviewCard() {
  let reviewArray = useSelector((state) => state.allReviews);
  return (
    <div>
      {reviewArray ? (
        reviewArray.map((r) => {
          return (
            <div className={style.revDiv} key={r.id}>
              <p>{r.title}</p>
              <p>Calificación: {r.score}</p>
              <p className="reviewDescription">{r.description}</p>
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
