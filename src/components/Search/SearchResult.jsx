import { useSelector } from "react-redux"
import ArtistCard from '../SearchResultCards/ArtistCard';
import AlbumCard from '../SearchResultCards/AlbumCard';
export default function SearchResult (){
    const data = useSelector(store => store.searchResult)


    return(
        <div>
            {console.log(data)}
            {data.map((e,i)=>{
                if(e.type==='artist'){
                    return (
                        <ArtistCard
                        key={i}
                        id={e.id}
                        title={e.title}
                        img={e.thumb}
                        type={e.type}
                        />
                    )
                }else if(e.type==='master'){
                    return (
                        <AlbumCard
                        key={i}
                        id={e.id}
                        title={e.title}
                        img={e.thumb}
                        type={e.type}
                        />

                    )
                }else return (
                    <p>otro typo de dato</p>
                )
            })}                       
        </div>
    )

}