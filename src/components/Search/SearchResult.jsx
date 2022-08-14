import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ArtistCard from "../SearchResultCards/ArtistCard";
import AlbumCard from "../SearchResultCards/AlbumCard";
import TrackCard from "../SearchResultCards/TrackCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import PaginationFilter from "./PaginationFilter";
import SearchBar from '../Search/SearchBar';
import { getSearch, calcPages,onPageChanged } from '../../redux/actions';
import style from "../../css/resultSearch.module.css";
import { pageLimit } from "./PaginationFilter";

export default function SearchResult() {
  const pagination = useSelector(store=>store.pagination);
  const query= useSelector(store=>store.query);
  const filter= useSelector(store=>store.filter);
  const index= useSelector(store=>store.index);
  const searchResult = useSelector((store) => store.searchResult);
  const currentResult = useSelector((store) => store.currentResult);
  const selected = useSelector((store) => store.selected);
  const history = useHistory();
  const dispatch= useDispatch();

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
  useEffect(()=>{
    dispatch(calcPages(pageLimit));
    const paginationData = {
      currentPage:1,
      pageLimit: pageLimit,
    };
    dispatch(onPageChanged(paginationData));    
  },[searchResult])

  let data=[]
  let render=[]
  if(selected){
    data=currentResult;
    render.push({selected:true})
  }else{
    data=searchResult;
    render.push({
      pagination : pagination,
      query:query,
      filter:filter,
      index:index,
      onMove:getSearch,
      selected:false
    });
  };
  return (
    <div className={style.box}>
      <div>
        <SearchBar
        onSearch={getSearch}
        />
      </div>
      <div>
        <Filters/>
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
      <div>
        {render.map(e=>{
          if(e.selected){
            return(
              <PaginationFilter/>
            )
          }else{
            return(
              <Pagination 
              pagination = {pagination}
              query={query}
              filter={filter}
              index={index}
              onMove={getSearch}/>              
            )
          }
        })

        }
        
        
      </div>
    </div>
  );
};
