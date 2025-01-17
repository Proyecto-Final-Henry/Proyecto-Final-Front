import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "../../css/rev.css";
import { Link, useHistory } from "react-router-dom";
import "../../css/perfilrev.css";
import Follow from "../Follow/Follow";
import DeleteReview from "../DeleteReview/DeleteReview";
import axios from "axios";
import LikesReview from "../LikesReview/LikesReview";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { socket } from '../../App';
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";

export default function ReviewCard(props) {
  let reviewArray = useSelector((state) => state.allReviews);
  const history = useHistory();
  const [user, setUser] = useState({});
  const [liked, setLiked] = useState(false);
  const [isOpenAlert, openAlert, closeAlert] = useModal(false);
  const [description, setDescription] = useState('');
  const myUser = useSelector((state) => state.userData);
  
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

  const handleNotification = (type, revId, title) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user?.name,
      receiverName: revId,
      type,
      title
    });
  };

  // console.log(reviewArray);

  const handleButton = (message) => {
    setDescription(message);
    openAlert()
  };

  const score = (count) => {
    let start = '';
    for (let i = 0; i < count; i++) {
      start += '★';
    }
    return start;
  };

  return (
    <div className="reCart scroll">
      {reviewArray ? (
        reviewArray.map((r) => {
          return (
            <div key={r.id} className="reCa">
              <div className="carti">
                <div className="per">
                  <div className="peRe peRe_border">
                    {r.userId !== user.id ? (
                      <Follow
                        targetName={r.user?.name}
                        targetEmail={r.user?.email}
                        followers={r.user.followers}
                        followings={r.user.followings}
                        name = {r.user.name}
                        id={r.userId}
                        meId={user.id}
                        location={props.location}
                      />
                    ) : (
                      <DeleteReview id={r.id} location={props.location} />
                    )}
                    
                    <Link
                      to={
                        user.id === r.user.id ? "/user" : `/users/${r.user.id}`
                      }
                    >

                    <img src={r.user.userImg} alt="" />

                    </Link>
                    <Link to={user.id === r.user.id ? "/user" : `/users/${r.user.id}`}>
                    <h4>{r.user.name}</h4>
                    </Link>

                    <h5>{r.user.role}</h5>
                    {r.userId !== user.id ?(
                    <div onClick={() => handleNotification(1, r.userId, r.title)}> 
                      <LikesReview likes={r.likes} id={r.id} iD={r?.user?.id} meId={user.id}/></div>):(<>❤️ likes: {r.likes.length}</>)}
                  </div>
                </div>
                <div className="rev">
                  {r.artist && (
                    <div className="revResource">
                      <p>Artista</p>
                      <Link to={`/artist/${r.artist.apiId}`}>
                        <p>{`${r.artist.name}`}</p>
                      </Link>
                    </div>
                  )}
                  {r.album && (
                    <div className="revResource">
                      <p>Álbum</p>
                      <Link to={`/album/${r.album.apiId}`}>
                        <p>{`${r.album.title}`}</p>
                      </Link>
                    </div>
                  )}
                  {r.song && (
                    <div className="revResource">
                      <p>Canción</p>
                      <Link to={`/song/${r.song.apiId}`}>
                        <p>{`${r.song.title}`}</p>
                      </Link>
                    </div>
                  )}
                  <div className="titulo">
                    <p>Titulo</p>
                    <p>{r.title}</p>
                  </div>
                  <div className="califica">
                    <p>Calificación: {r.score}</p>
                    <p className='start'>
                      {score(r.score)}
                    </p>
                  </div>
                  <div className="descri">
                    <p>Descripcion:</p>
                    {/* <p className="reviewDescription">{r.description}</p> */}
                    <button className='btn_description' onClick={() => handleButton(r.description)}>Ver descripción</button>
                    <Modal isOpen={isOpenAlert} onClose={closeAlert} className="modal_body">
                      <h4>Descripción de la reseña</h4>
                      <div  className="option_deleteReview">
                          <p className="reviewDescription">{description}</p>
                          <button onClick={closeAlert}>Cerrar</button>
                      </div>
                    </Modal>
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
        </div>
      )}
    </div>
  );
}


