import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getSongData } from "../../redux/actions";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateReview from "../CreateReview/CreateReview";
import ReviewDeck from "../ReviewDeck/ReviewDeck";
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import PreviewPlayer from "../PreviewPlayer/PreviewPlayer";
import style from "../../css/songs.module.css";
import AddTrack from "../PlayList/AddTrack";

export default function SongDetail() {
  let history = useHistory()
  let dispatch = useDispatch();
  let songId = useParams().id;
  const [key, setKey] = useState("detalle");
  const [user, setUser] = useState()

  useEffect(() => {
    const autenticarUsuario = async () => {
        const token = localStorage.getItem("token")
        if(!token){
            history.push("/login")
            return
        }
        const config = {
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      };
      try {
          const { data } = await axios(
              `/api/back-end/users/perfil`,
              config
          );
          setUser(data);
          
      } catch (error) {
          console.log(error.response.data.msg);
      };
    };
    autenticarUsuario();
  },[]);

  useEffect(() => {
    dispatch(getSongData(songId));
    return 
  }, []);

  let songData = useSelector((state) => state.songData);
  console.log(songData)
  console.log(user)

  return (
    <div className={style.songDetail}>
      <div className={style.songDetail_header}>
        <div>
          <img src={songData.image} alt={songData.album} className={style.songDetail_img}/>
        </div>

        <div className={style.songDetail_content}>
          <h3>CANCION</h3> 
          <h1><i className="fa-regular fa-heart"></i> {songData.title}</h1>
          <div>
            {songData.preview && (
              <div>
                <h4>Avance de la canción: </h4>
                <PreviewPlayer preview={songData.preview}/>
              </div>
            )}
          </div>
          <div>
          <AddTrack
        userId={user?.id}
        trackId={songData.id}
        name={songData.title}
        />
          </div>
        </div>
      </div>        
      
      <div>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}>

            <Tab eventKey="detalle" title="Detalle">
              <div className={style.songDetail_opcionDetalle}>
                <div className={style.songDetail_detalle}>
                  <div>
                    <span><i className="fa-solid fa-microphone"></i></span>
                    <span> Artista:</span>
                    <Link to={`/artist/${songData.artistId}`}>
                      <p>{songData.artist}</p>
                    </Link>
                  </div>

                  <div>
                    <span><i className="fa-solid fa-compact-disc"></i></span>
                    <span> Álbum:</span>
                    <Link to={`/album/${songData.albumId}`}>
                      <p>{songData.album}</p>
                    </Link>
                  </div>

                  <div>
                    <span><i className="fa-solid fa-stopwatch"></i></span>
                    <span> Duración:</span>
                    <p>{(parseInt(songData.duration) / 60).toFixed(2)} minutos</p>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="resena" title="Reseñas">
              <ReviewDeck apiId={songId} type="song" />
              <CreateReview apiId={songId} type="song" name={songData.title} />
            </Tab>
          </Tabs>
      </div>
    </div>
  );
};
