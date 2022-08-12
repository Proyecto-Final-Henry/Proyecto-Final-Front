import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistSongs} from "../../redux/actions";
import Songs from "../Songs/Songs";
import Pagination from "../Search/Pagination";




export default function ArtistSongs({artistId}) {
    let dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getArtistSongs(artistId));
    }, []);

    const pagination = useSelector(store=>store.pagination)
    const filter= useSelector(store=>store.filter)
    const index= useSelector(store=>store.index)  
    let artistSongs = useSelector((state) => state.artistSongs);
  
    return (
      <div className="topSongs">
        
                
        <Songs 
          songs={artistSongs}
          index={index}
        /> 
        <Pagination 
          pagination = {pagination}
          query={artistId}
          filter={filter}
          index={index}
          onMove={getArtistSongs}
        />
      </div>
    );
  }