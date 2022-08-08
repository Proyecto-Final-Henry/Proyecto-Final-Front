import { useDispatch, useSelector } from "react-redux";
import { getAlbumData } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import CreateReview from "../CreateReview/CreateReview";
import AlbumSongs from "../AlbumSongs/AlbumSongs";
import ReviewDeck from "../ReviewDeck/ReviewDeck";

export default function AlbumDetail() {
  let dispatch = useDispatch();
  let albumId = useParams().id;

  useEffect(() => {
    dispatch(getAlbumData(albumId));
  }, []);

  let albumData = useSelector((state) => state.albumData);

  return (
    <div>
      {albumData ? (
        <div>
          <h1>{albumData.title}</h1>
          <img src={albumData.image} alt={albumData.title} />
          <p>Artist:</p>
          {albumData.artist && (
            <Link to={`/artist/${albumData.artist.idartist}`}>
              <p>{albumData.artist.nameartist}</p>
            </Link>
          )}
          <p>Songs:</p>
          <AlbumSongs albumId={albumId} />
          <ReviewDeck apiId={albumId} type="album" />
          <CreateReview apiId={albumId} type="album" name={albumData.title} />
        </div>
      ) : (
        <p>¡Estamos buscando el álbum!</p>
      )}
    </div>
  );
}
