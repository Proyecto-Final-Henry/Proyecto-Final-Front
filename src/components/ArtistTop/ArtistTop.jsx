import { useDispatch, useSelector } from "react-redux";
import { getArtistTop } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArtistTop({ artistId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistTop(artistId));
  }, []);

  let artistTop = useSelector((state) => state.artistTop);

  return (
    <div className="topSongs">
      <h2>Canciones del momento:</h2>
      {artistTop.map((s) => {
        return (
          <div className="ArtistTo">
            <div id={s.id} key={s.id} className="ArtistTo">
            {/* <Link to={`/song/${s.id}`}> */}
            <img src={s.album.imageAlbum} alt={s.album.titleAlbum} />
            <p>{s.title}</p>
            {/* </Link> */}
            <p>Álbum:</p>
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
