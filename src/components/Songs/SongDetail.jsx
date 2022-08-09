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
      <img src={songData.img} alt={songData.album} />
      <h4>Duración:</h4>
      <p>{(parseInt(songData.duration) / 60).toFixed(2)}</p>
      <h4>Artista:</h4>
      <Link to={`/artist/${songData.artistId}`}>
        <p>{songData.artist}</p>
      </Link>
      <h4>Álbum:</h4>
      <Link to={`/album/${songData.albumId}`}>
        <p>{songData.album}</p>
      </Link>
      <br />

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="contact" title="Reseñas">
          <ReviewDeck apiId={songId} type="song" />
          <CreateReview apiId={songId} type="song" name={songData.title} />
        </Tab>
      </Tabs>
    </div>
  );
}
