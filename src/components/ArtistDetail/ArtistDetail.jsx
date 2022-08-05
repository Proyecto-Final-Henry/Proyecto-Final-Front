import { useDispatch, useSelector } from "react-redux";
import { getArtistData } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CreateReview from "../CreateReview/CreateReview";

export default function ArtistDetail() {
  let dispatch = useDispatch();
  let artistId = useParams().id;

  useEffect(() => {
    dispatch(getArtistData(artistId));
  }, []);

  let artistData = useSelector((state) => state.artistData);
  console.log(artistData);

  return (
    <div>
      <h1>{artistData.name}</h1>
      <img src={artistData.image} alt={artistData.name} />
      <CreateReview apiId={artistId} type="artist" name={artistData.name} />
    </div>
  );
}
