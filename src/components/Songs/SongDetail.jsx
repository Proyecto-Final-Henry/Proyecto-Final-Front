import { useDispatch, useSelector } from "react-redux";
import { getSongData } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateReview from "../CreateReview/CreateReview";
import ReviewDeck from "../ReviewDeck/ReviewDeck";
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";

export default function SongDetail() {
  let dispatch = useDispatch();
  let songId = useParams().id;
  const [key, setKey] = useState("top");

  useEffect(() => {
    dispatch(getSongData(songId));
  }, []);

  let songData = useSelector((state) => state.songData);

  return (
    <div>
      <h1>{songData.title}</h1>
      <h3>Duración: {(parseInt(songData.duration) / 60).toFixed(2)}</h3>
      <Link to={`/artist/${songData.artistId}`}>
        <h3>Artista: {songData.artist}</h3>
      </Link>
      <Link to={`/album/${songData.albumId}`}>
        <h3>Álbum : {songData.album}</h3>
      </Link>
      <img src={songData.img} alt={songData.album} />

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="contact" title="Reseñas">
          <ReviewDeck apiId={songData.id} type="song" />
          <CreateReview apiId={songData.id} type="song" name={songData.title} />
        </Tab>
      </Tabs>
    </div>
  );
}
