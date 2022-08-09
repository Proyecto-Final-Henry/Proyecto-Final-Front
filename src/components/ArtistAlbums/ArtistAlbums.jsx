import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtistAlbum } from "../../redux/actions";
import Albums from "../Albums/Albums";

export default function ArtistAlbums({ artistId }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistAlbum(artistId));
  }, []);

  let artistAlbums = useSelector((state) => state.artistAlbums);

  return (
    <div className="topSongs">
      <Albums albums={artistAlbums} />
    </div>
  );
}
