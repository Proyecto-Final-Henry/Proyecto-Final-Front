import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRandomArtists,
  getRandomSongs,
  getTopArtists,
  getTopSongs,
} from "../../redux/actions";
import Button from "react-bootstrap/Button";
import MusicCard from "./MusicCard";
import ArtistCard from "./ArtistCard";

export default function Music() {
  let history = useHistory();
  let dispatch = useDispatch();

  let randomArtists = useSelector((state) => state.randomArtists);
  let topSongs = useSelector((state) => state.topSongs);
  let topArtists = useSelector((state) => state.topArtists);
  let randomSongs = useSelector((state) => state.randomSongs);

  console.log("randomSongs", randomSongs);
  console.log("randomArtist", randomArtists);
  console.log("topArtist", topArtists);
  console.log("topSongs", topSongs);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const active = localStorage.getItem("active");
      if (active === "false") {
        history.push("/user/restore");
        return;
      }
    };
    autenticarUsuario();
    if (!randomSongs.length) {
      dispatch(getRandomSongs());
    }
    if (!randomArtists.length) {
      dispatch(getRandomArtists());
    }
    if (!topSongs.length) {
      dispatch(getTopSongs());
    }
    if (!topArtists.length) {
      dispatch(getTopArtists());
    }
  }, []);

  let handleSongs = () => {
    dispatch(getRandomSongs());
  };

  return (
    <div className="t">
      <div>
        Descubre nuevas canciones <br />
        {randomSongs ? (
          <Button
            style={{ marginTop: "25px" }}
            onClick={handleSongs}
            variant="outline-success"
            type="submit"
          >
            Nuevas canciones
          </Button>
        ) : null}
        {randomSongs ? (
          <div className={style.musicRandom}>
            {randomSongs.map((song) => {
              return (
                <MusicCard
                  key={song.id}
                  id={song.id}
                  title={song.title}
                  album={song.album}
                  albumId={song.albumId}
                  artist={song.artist}
                  artistId={song.artistId}
                  img={song.img}
                />
              );
            })}
          </div>
        ) : (
          <div className={style.mainDiv}>
            <h2> Cargando nuevos descubrimientos </h2>
            <br />
            <h3>¡Recomiendanos alguna canción que te gustaria escuchar!</h3>
            <br />
            <Link to="/contact2">Contactanos</Link>
          </div>
        )}
      </div>
      <br />
      <div>
        Canciones del momento
        {topSongs ? (
          <div className={style.musicRandom}>
            {topSongs.map((song) => {
              return (
                <MusicCard
                  key={song.id}
                  id={song.id}
                  title={song.title}
                  albumId={song.albumId}
                  artist={song.artist?.name}
                  artistId={song.artist?.id}
                  img={song.artist?.image}
                />
              );
            })}
          </div>
        ) : (
          <div className={style.mainDiv}>
            <h2> Cargando las canciones del momento </h2>
            <br />
            <h3>¡Recomiendanos tu cancion favorita!</h3>
            <br />
            <Link to="/contact2">Contactanos</Link>
          </div>
        )}
      </div>
      <br />
      <div>
        Descubre nuevos artistas
        {randomArtists ? (
          <div className={style.musicRandom}>
            {randomArtists.map((artist) => {
              return (
                <ArtistCard
                  key={artist.id}
                  apiId={artist.apiId}
                  id={artist.id}
                  name={artist.name}
                  image={artist.image}
                />
              );
            })}
          </div>
        ) : (
          <div className={style.mainDiv}>
            <h2> Cargando nuevos artistas</h2>
            <br />
            <h3>¡Recomiendanos un artsita que te gustaria escuchar!</h3>
            <br />
            <Link to="/contact2">Contactanos</Link>
          </div>
        )}
      </div>
      <br />
      <div>
        Artistas del momento
        {topArtists ? (
          <div className={style.musicRandom}>
            {topArtists.map((artist) => {
              return (
                <ArtistCard
                  key={artist.id}
                  apiId={artist.apiId}
                  id={artist.id}
                  name={artist.name}
                  image={artist.image}
                />
              );
            })}
          </div>
        ) : (
          <div className={style.mainDiv}>
            <h2> Cargando los artistas del momento</h2>
            <br />
            <h3>¡Recomiendanos a tu artista favorito!</h3>
            <br />
            <Link to="/contact2">Contactanos</Link>
          </div>
        )}
      </div>
    </div>
  );
}
