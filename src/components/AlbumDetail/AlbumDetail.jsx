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
          <div className="ArtistD">
              <div className="ArtistT">
                <div className="imge">
                  <img src={albumData.image} alt={albumData.title} />
                </div>
                <h1>{albumData.title}</h1>
              </div>
              {albumData.artist && (
                <Link to={`/artist/${albumData.artist.idartist}`}>
                  <div className="peque">
                    <img src={albumData.artist.imageartist} alt={albumData.artist.imageartist}/>
                    <p>{albumData.artist.nameartist}</p>
                  </div>
                </Link>
              )}
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
