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
      {artistTop.map((s) => {
        return (
          <div id={s.id} key={s.id}>
            {/* <Link to={`/song/${s.id}`}> */}
            <p>{s.title}</p>
            {/* </Link> */}
            <p>Album:</p>
            <Link to={`/album/${s.album.idAlbum}`}>
              <p>{s.album.titleAlbum}</p>
            </Link>
            <img src={s.album.imageAlbum} alt={s.album.titleAlbum} />
          </div>
        );
      })}
    </div>
  );
}
