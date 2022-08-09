import { useDispatch, useSelector } from "react-redux";
import { getArtistData } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CreateReview from "../CreateReview/CreateReview";
import ArtistTop from "../ArtistTop/ArtistTop";
import ReviewDeck from "../ReviewDeck/ReviewDeck";

export default function ArtistDetail() {
  let dispatch = useDispatch();
  let artistId = useParams().id;

  useEffect(() => {
    dispatch(getArtistData(artistId));
  }, []);

  let artistData = useSelector((state) => state.artistData);

  return (
    <div>
      <h1>{artistData.name}</h1>
      <img src={artistData.image} alt={artistData.name} />
      <h2>Top Songs:</h2>
      <ArtistTop artistId={artistId} />
      <ReviewDeck apiId={artistId} type="artist" />
      <CreateReview apiId={artistId} type="artist" name={artistData.name} />
    </div>
  );
}
