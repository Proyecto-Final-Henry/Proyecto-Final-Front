import { useDispatch, useSelector } from "react-redux";
import { getAlbumSongs } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AlbumSongs({ albumId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumSongs(albumId));
  }, []);

  let albumSongs = useSelector((state) => state.albumSongs);

  return (
    <div className="albumSongs">
      {albumSongs.map((s) => {
        return (
          <div id={s.id} key={s.id}>
            <Link to={`/song/${s.id}`}>
              <p>{s.title}</p>
            </Link>
            <p>duración: {s.duration}</p>
          </div>
        );
      })}
    </div>
  );
}
