import { useDispatch, useSelector } from "react-redux";
import { getAlbumSongs } from "../../redux/actions";
import { useEffect } from "react";
import Songs from "../Songs/Songs";

export default function AlbumSongs({ albumId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumSongs(albumId));
  }, []);

  let albumSongs = useSelector((state) => state.albumSongs);
  console.log('albumSongs',albumSongs);
  return (
    <div className="albumSongs">
      <Songs songs={albumSongs}/>
      {/* {albumSongs.map((s) => {
        return (
          <div id={s.id} key={s.id}>
            <p>{s.title}</p>
            <p>duración: {(parseInt(s.duration) / 60).toFixed(2)}</p>
          </div>
        );
      })}; */}
    </div>
  );
};
