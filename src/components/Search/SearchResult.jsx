import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ArtistCard from "../SearchResultCards/ArtistCard";
import AlbumCard from "../SearchResultCards/AlbumCard";
import TrackCard from "../SearchResultCards/TrackCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import SearchBar from '../Search/SearchBar';
import style from "../../css/resultSearch.module.css";

export default function SearchResult() {
  const data = useSelector((store) => store.searchResult);
  const history = useHistory();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
    };
    autenticarUsuario();
  }, []);

  return (
    <div className={style.box}>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Filters />
      </div>
      <div>
        <Pagination />
      </div>
      <div>
        {data.map((e, i) => {
          if (e.type === "artist") {
            return (
              <ArtistCard
                key={i}
                id={e.id}
                name={e.name}
                img={e.img}
                type={e.type}
              />
            );
          } else if (e.type === "album") {
            return (
              <AlbumCard
                key={i}
                id={e.id}
                title={e.title}
                img={e.img}
                artist={e.artist}
                artistId={e.artistId}
                type={e.type}
              />
            );
          } else if (e.type === "track") {
            return (
              <TrackCard
                key={i}
                id={e.id}
                title={e.title}
                img={e.img}
                artistId={e.artistId}
                artist={e.artist}
                album={e.album}
                albumId={e.albumId}
                type={e.type}
              />
            );
          } else return <p>otro typo de dato esto es un error y no debe renderizarse hay, data que estamos ignorando</p>;
        })}
      </div>
    </div>
  );
};
