import { Link } from "react-router-dom";
import style from "../../css/rev.css";

export default function ResReviewCard({ resReviews }) {
  return (
    <div>
      {resReviews.reviews ? (
        resReviews.reviews.map((r) => {
          return (
            <div key={r.reviewId}>
              <div className="peRe">
                <img src={r.userImg} alt="" />
                <h4>{r.user}</h4>
                <h5>{r.userRole}</h5>
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
          );
        })
      ) : (
        <div className='revDiv'>
          <h4>¡Aún no hay reseñas!</h4>
          <h4>Se el primero en crear una!</h4>
        </div>
      )}
    </div>
  );
}
