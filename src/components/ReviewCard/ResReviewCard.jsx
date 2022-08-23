import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import style from "../../css/rev.css";
import "../../css/perfilrev.css";
import Follow from "../Follow/Follow";
import DeleteReview from "../DeleteReview/DeleteReview";
import LikesReview from "../LikesReview/LikesReview";
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";

export default function ResReviewCard({ resReviews }) {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);
  const [description, setDescription] = useState("");

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
        setUser(data);
      } catch (error) {
        console.log(error?.response.data.msg);
      }
    };
    autenticarUsuario();
  }, []);

  const handleButton = (message) => {
    setDescription(message);
    openAlert();
  };

  const score = (count) => {
    let start = "";
    for (let i = 0; i < count; i++) {
      start += "★";
    }
    return start;
  };

  return (
    <div>
      {resReviews.reviews ? (
        resReviews.reviews.map((r) => {
          return (
            <div key={r.id}>
              <div className="peRe">
                <div className="peRe peRe_border">
                  {r.userId !== user.id ? (
                    <Follow
                      followers={r.user.followers}
                      followings={r.user.followings}
                      id={r.userId}
                      meId={user.id}
                    />
                  ) : (
                    <DeleteReview id={r.id} />
                  )}
                  <Link
                    to={user.id === r.user.id ? "/user" : `/users/${r.user.id}`}
                  >
                    <img src={r.user.userImg} alt="" />
                  </Link>
                  <h4>{r.user.name}</h4>
                  <h5>{r.user.role}</h5>
                  {r.userId !== user.id ? (
                    <LikesReview likes={r.likes} id={r.id} meId={user.id} />
                  ) : (
                    <>❤️ likes: {r.likes.length}</>
                  )}
                </div>
              </div>
              <div className="rev">
                <div className="titulo">
                  <p>Titulo</p>
                  <p>{r.title}</p>
                </div>
                <div className="califica">
                  <p>Calificación: {r.score}</p>
                  <p className="start">{score(r.score)}</p>
                </div>
                <div className="descri">
                  <p>Descripción:</p>
                  <button
                    className="btn_description"
                    onClick={() => handleButton(r.description)}
                  >
                    Ver descripción
                  </button>
                  <Modal isOpen={isOpenAlert} onClose={closeAlert}>
                    <h4>Descripción de la reseña</h4>
                    <div className="option_deleteReview">
                      <p className="reviewDescription">{description}</p>
                      <button onClick={closeAlert}>Cerrar</button>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="revDiv">
          <h4>¡Aún no hay reseñas!</h4>
          <h4>Se el primero en crear una!</h4>
        </div>
      )}
    </div>
  );
}
