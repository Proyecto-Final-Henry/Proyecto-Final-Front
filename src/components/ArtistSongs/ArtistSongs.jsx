import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistSongs } from "../../redux/actions";
import Songs from "../Songs/Songs";

export default function ArtistSongs({ artistId }) {
    let dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getArtistSongs(artistId));
    }, []);
  
    let artistSongs = useSelector((state) => state.artistSongs);
  
    return (
      <div className="topSongs">
        <Songs songs={artistSongs}/> 
      </div>
    );
  }