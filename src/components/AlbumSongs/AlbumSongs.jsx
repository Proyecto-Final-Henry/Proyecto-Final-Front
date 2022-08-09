import { useDispatch, useSelector } from "react-redux";
import { getAlbumSongs, getAlbumData } from "../../redux/actions";
import { useEffect } from "react";

export default function AlbumSongs({ albumId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumSongs(albumId));
  }, []);
  useEffect(() => {
    dispatch(getAlbumData(albumId));
  }, []);

  let albumData = useSelector((state) => state.albumData);
  let albumSongs = useSelector((state) => state.albumSongs);

  return (
    <div className="topSongs">
      <h2>Songs:</h2>
      {albumSongs.map((s) => {
        return (
          <div id={s.id} key={s.id} className="ArtistTo">
            {/* <Link to={`/song/${s.id}`}> */}
            <img src={albumData.image} alt={albumData.image} />
            <p>{s.title}</p>
            <p>duración: {(parseInt(s.duration) / 60).toFixed(2)}</p>
          </div>
        );
      })};
    </div>
  );
};
