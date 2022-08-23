import { useDispatch, useSelector } from "react-redux";
import { getArtistData, getPlaylist } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateReview from "../CreateReview/CreateReview";
import ArtistTop from "../ArtistTop/ArtistTop";
import ReviewDeck from "../ReviewDeck/ReviewDeck";
import style from "../../css/artistDetail.module.css";
import Button from 'react-bootstrap/Button';
import { BsShieldFillCheck } from "react-icons/bs";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ArtistAlbums from "../ArtistAlbums/ArtistAlbums";
import ArtistSongs from "../ArtistSongs/ArtistSongs";
import ArtistSongsSearch from "../ArtistSongs/ArtistSongSearch";
import axios from "axios";

export default function ArtistDetail() {
  let dispatch = useDispatch();
  let artistId = useParams().id;
  const [key, setKey] = useState('top');
  let history = useHistory();
  const [user, setUser] = useState({
    name:'',
    id:'',
  });

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
    dispatch(getArtistData(artistId));
  },[]);
   
  useEffect(() => {
    dispatch(getPlaylist(user.id));
  },[user.id,]);

  let artistData = useSelector((state) => state.artistData);

  return (
    <div style={{"backgroundColor": "pink"}}>
      <div className={style.artistDetail_header}>
        <div>
          <img src={artistData.image} alt={artistData.name}/>
        </div>
        <div className={style.artistDetail_information}>
          <p><BsShieldFillCheck/> Artista Verificado</p>
          <h1>{artistData.name}</h1>
          <Button  variant="outline-success">Seguir</Button>
        </div>
      </div>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
      <Tab eventKey="top" title="Populares">
        <ArtistTop artistId={artistId} />
      </Tab>
      <Tab eventKey="albums" title="Discografía">
        <ArtistAlbums artistId={artistId} />
      </Tab>
      <Tab eventKey="songs" title="Canciones">
        <ArtistSongs 
          artistId={artistId}
          userId={user.id}
        />
      </Tab>
      <Tab eventKey="searchsong" title="Buscar Cancion">
        <ArtistSongsSearch 
          artistId={artistId}
          userId={user.id}
        />
      </Tab>
      <Tab eventKey="contact" title="Reseñas">
      
      <ReviewDeck apiId={artistId} type="artist" />
      <CreateReview apiId={artistId} type="artist" name={artistData.name} />
      </Tab>
    </Tabs>

    </div>
  );
};
