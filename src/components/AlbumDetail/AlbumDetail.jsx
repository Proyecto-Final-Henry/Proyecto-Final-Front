import { useDispatch, useSelector } from "react-redux";
import { getAlbumData } from "../../redux/actions";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateReview from "../CreateReview/CreateReview";
import AlbumSongs from "../AlbumSongs/AlbumSongs";
import ReviewDeck from "../ReviewDeck/ReviewDeck";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import style from "../../css/artistDetail.module.css";
import Button from "react-bootstrap/Button";
import { BsShieldFillCheck } from "react-icons/bs";

export default function AlbumDetail() {
  let dispatch = useDispatch();
  let albumId = useParams().id;
  const [key, setKey] = useState("songs");
  let history = useHistory();

  useEffect(() => {
    const autenticarUsuario = async () => {
        const token = localStorage.getItem("token")
        if(!token){
            history.push("/login")
            return
        }
    };
    autenticarUsuario()
    dispatch(getAlbumData(albumId));
  },[]);
  
  let albumData = useSelector((state) => state.albumData);

  return (
    <div>
      {albumData ? (
        <div>
          <div>
            <div className={style.artistDetail_header}>
              <div>
                <img src={albumData.image} alt={albumData.name} />
              </div>
              <div className={style.artistDetail_information}>
                <p>
                  <BsShieldFillCheck /> Álbum Verificado
                </p>
                <h1>{albumData.name}</h1>
                <Button variant="outline-success">Seguir</Button>
              </div>
            </div>
            <div>
              {albumData.artist && (
                <Link to={`/artist/${albumData.artist.idartist}`}>
                  <div className="peque">
                    <img
                      src={albumData.artist.imageartist}
                      alt={albumData.artist.imageartist}
                    />
                    <p>{albumData.artist.nameartist}</p>
                  </div>
                </Link>
              )}
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="songs" title="Canciones">
                <AlbumSongs albumId={albumId} />
              </Tab>
              <Tab eventKey="contact" title="Reseñas">
                <ReviewDeck apiId={albumId} type="album" />
                <CreateReview
                  apiId={albumId}
                  type="album"
                  name={albumData.title}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      ) : (
        <p>¡Estamos buscando el álbum!</p>
      )}
    </div>
  );
};
