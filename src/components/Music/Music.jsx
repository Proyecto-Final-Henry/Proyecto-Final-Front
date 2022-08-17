import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomSongs } from "../../redux/actions";
import Button from "react-bootstrap/Button";
import MusicCard from "./MusicCard";

export default function Music() {
    let history = useHistory();
    let dispatch = useDispatch();
    let randomSongs = useSelector((state) => state.randomSongs);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            };
        };
        if (!randomSongs.length){
          dispatch(getRandomSongs());
        }
         autenticarUsuario();
    },[]);

    let handleSongs = () => {
      dispatch(getRandomSongs())
    };

    return (
        <div className="t">
          <div id="randomSongs">
            {randomSongs ? <Button
                style={{"marginTop": "25px"}}
                onClick={handleSongs}
                variant="outline-success"
                type="submit"
              >Nuevas canciones</Button> : null }
            {randomSongs ? 
              <div className={style.musicRandom}>{
                randomSongs.map(song => {
                    return (
                      <MusicCard 
                        key = {song.id}
                        id = {song.id}
                        title = {song.title}
                        album = {song.album}
                        albumId = {song.albumId}
                        artist = {song.artist}
                        artistId = {song.artistId}
                        img = {song.img}
                      />
                    );
                  })
              }
              </div>
            : 
              <div className={style.mainDiv}>
                <h2> Cargando nuevos descubrimientos </h2>
                <br/>
                <h3>¡Recomiendanos alguna canción que te gustaria escuchar!</h3>
                <br/>
                <Link to="/contact">Contactanos</Link>
              </div>
            }
          </div>
          <div id="topSongs">
              aca van las canciones del momento
          </div>

          <div id="randomArtists">
              aca van los artistas random
          </div>

          <div id="topArtists">
              aca van los artistas del momento
          </div>
        </div>
      );
};