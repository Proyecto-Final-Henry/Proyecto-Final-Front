import { useSelector } from "react-redux";
import ArtistCard from '../SearchResultCards/ArtistCard';
import AlbumCard from '../SearchResultCards/AlbumCard';
import TrackCard from "../SearchResultCards/TrackCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import style from "../../css/resultSearch.module.css";

export default function SearchResult (){
    const data = useSelector(store => store.searchResult);

    return(
        <div className={style.box}>
            <div>
                <Filters/>
            </div>
            <div>
                <Pagination/>
            </div>
            <div>           
            {data.map((e,i)=>{
                if(e.type==='artist'){
                    return (
                        <ArtistCard
                        key={i}
                        id={e.id}
                        name={e.name}
                        img={e.img}
                        type={e.type}
                        />
                    )
                }else if(e.type==='album'){
                    return (
                        <AlbumCard
                        key={i}
                        id={e.id}
                        title={e.title}
                        img={e.img}
                        artist={e.artist}
                        type={e.type}
                        />

                    )
                }else if(e.type==='track'){
                    return (
                        <TrackCard
                        key={i}
                        id={e.id}
                        title={e.title}
                        img={e.img}
                        artist={e.artist}
                        type={e.type}
                        />
                    )
                }
                else return (
                    <p>otro typo de dato</p>
                )
            })}
            </div>                       
        </div>
    );
};