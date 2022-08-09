import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MusicCard from "./MusicCard";

export default function Music() {
    let history = useHistory();
    let random = useSelector((state) => state.randomSongs);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
    },[]);

    return (
        <div>
          {random ? (
            <div className={style.musicRandom}>{
                random.map(song => {
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

          ) : (
            <div className={style.mainDiv}>
              <h2>Parece que no hay música aún</h2>
              <br/>
              <h3>Recomiendanos alguna canción que te gustaria escuchar!</h3>
              <br/>
              <Link to="/contact">Contactanos</Link>
            </div>
          )}
        </div>
      );
};