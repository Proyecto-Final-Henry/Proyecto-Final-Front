import { useDispatch, useSelector } from "react-redux";
import { getArtistTop } from "../../redux/actions";
import { useEffect } from "react";
import { BsStopwatchFill } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";

export default function ArtistTop({ artistId }) {
  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getArtistTop(artistId));
  }, []);

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

  let artistTop = useSelector((state) => state.artistTop);

  return (
    <div className="topSongs">
      <h2>Canciones del momento:</h2>
      {artistTop.map((s) => {
        return (
            <div id={s.id} key={s.id} className="ArtistTo" style={{"backgroundColor": "black"}}>
              <div>
                <img src={s.album.imageAlbum} alt={s.album.titleAlbum} />
              </div>
              <div>
                <Link to={`/song/${s.id}`}>
                  <p>{s.title}</p>
                </Link>
              </div>
              <div>
                <p>Álbum:</p>
              </div>
              <div>
                <Link to={`/album/${s.album.idAlbum}`}>
                  <p >{s.album.titleAlbum}</p>
                </Link>
              </div>
            </div>
        );
      })}
    </div>
  );
}
