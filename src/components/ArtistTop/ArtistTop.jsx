import { useDispatch, useSelector } from "react-redux";
import { getArtistTop } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../css/artistDetail.module.css";
import Songs from "../Songs/Songs";

export default function ArtistTop({ artistId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistTop(artistId));
  }, []);

  let artistTop = useSelector((state) => state.artistTop);

  return (
    <div className="topSongs">
      <Songs songs={artistTop}/> 
    </div>
  );
}
