import { useDispatch, useSelector } from "react-redux";
import { getArtistData } from "../../redux/actions";
import { useParams } from "react-router-dom";
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

export default function ArtistDetail() {
  let dispatch = useDispatch();
  let artistId = useParams().id;
  const [key, setKey] = useState('top');
  useEffect(() => {
    dispatch(getArtistData(artistId));
  }, []);

  let artistData = useSelector((state) => state.artistData);

  return (
    <div style={{"backgroundColor": "pink"}}>
      <div className={style.artistDetail_header}>
        <div>
          <img src={artistData.image} alt={artistData.name} />
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
        />
      </Tab>
      <Tab eventKey="searchsong" title="Buscar Cancion">
        <ArtistSongsSearch 
          artistId={artistId}
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
