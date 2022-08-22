import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAlbum,
  clearArtist,
  clearSong,
  getRandomArtists,
  getRandomSongs,
  getTopArtists,
  getTopSongs,
} from "../../redux/actions";
import Button from "react-bootstrap/Button";
// import MusicCard from "./MusicCard";
// import ArtistCard from "./ArtistCard";
// import Carousel from "../Carousel/CarouselRandomSongs";
import CarouselTopArtists from "../Carousel/CarouselTopArtists";
import CarouselRandomArtists from "../Carousel/CarouselRandomArtists";
import CarouselTopSongs from "../Carousel/CarouselTopSongs";
import CarouselRandomSongs from "../Carousel/CarouselRandomSongs";
// import CarouselTopArtists from "../Carousel/CarouselRandomArtists";
// import { Carousel } from "./Carousel";

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
    dispatch(clearArtist());
    dispatch(clearAlbum());
    dispatch(clearSong());
  }, []);

  let handleSongs = () => {
    dispatch(getRandomSongs());
  };

  return (
    <div className="t">
      <div>
        <h1 className={style.titte_music}>Disfruta de nuestra variedad de canciones </h1>
        
        {randomSongs ? (
          <CarouselRandomSongs data={randomSongs} title={'Descubre nuevas canciones'}/>
        ) : (
          <div className={style.mainDiv}>
            <h2> Cargando nuevos descubrimientos </h2>
            <br />
            <h3>¡Recomiendanos alguna canción que te gustaria escuchar!</h3>
            <br />
            <Link to="/contact2">Contactanos</Link>
          </div>
        )}

        {randomSongs ? (
          <Button
            style={{ marginTop: "0px" }}
            onClick={handleSongs}
            variant="outline-success"
            type="submit"
          >
            Nuevas canciones
          </Button>
        ) : null}
      </div>
      <br />
      <div>
        {topSongs ? (
          <CarouselTopSongs data={topSongs} title={'Canciones del momento'}/>
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
        {randomArtists ? (
          <CarouselRandomArtists data={randomArtists} title={'Descubre nuevos artistas'}/>
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
        {topArtists ? (
          <CarouselTopArtists data={topArtists} title={'Artistas del momento'}/>
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
