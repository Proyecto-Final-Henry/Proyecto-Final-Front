import {useSelector } from "react-redux";
import { getArtistSongSearch } from "../../redux/actions";
import Songs from "../Songs/Songs";
import SearchBar from "../Search/SearchBar";


export default function ArtistSongsSearch({artistId}) {
    const index= useSelector(store=>store.index)  
    let artistSongs = useSelector((state) => state.artistSongsSearch);
  
    return (
      <div className="topSongs">
        <SearchBar
        id={artistId}    
        onSearch={getArtistSongSearch}
        />        
        <Songs 
          songs={artistSongs}
          index={index}
        /> 
      </div>
    );
  }