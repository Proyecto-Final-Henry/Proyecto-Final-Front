import { useDispatch, useSelector } from "react-redux";
import { getAlbumSongs, getAlbumData } from "../../redux/actions";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function AlbumSongs({ albumId }) {
  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const autenticarUsuario = async () => {
        const token = localStorage.getItem("token")
        if(!token){
            history.push("/login")
            return
        }
    };
    autenticarUsuario()
  },[]);

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
          <div id={s.id} key={s.id} className="ArtistTo" style={{"backgroundColor": "pink", "borderRadius": "20px", "margin": "15px"}}>
            <img src={albumData.image} alt={albumData.image} />
            <Link to={`/song/${s.id}`}>
              <p>{s.title}</p>
            </Link>
            <p>Duración: {(parseInt(s.duration) / 60).toFixed(2)} minutos</p>
          </div>
        );
      })}
      ;
    </div>
  );
};
