import { useDispatch, useSelector } from "react-redux";
import { getArtistTop } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../css/artistDetail.module.css";
import Songs from "../Songs/Songs";

export default function ArtistTop({ artistId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistTop(artistId));
  }, []);

  let artistTop = useSelector((state) => state.artistTop);

  return (
    <div className="topSongs">
      <h2>Top Songs:</h2>
      {artistTop.map((s) => {
        return (
          <div className="ArtistTo">
            <div id={s.id} key={s.id} className="ArtistTo">
            {/* <Link to={`/song/${s.id}`}> */}
            <img src={s.album.imageAlbum} alt={s.album.titleAlbum} />
            <p>{s.title}</p>
            {/* </Link> */}
            <p>Album:</p>
            <Link to={`/album/${s.album.idAlbum}`}>
              <p>{s.album.titleAlbum}</p>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
