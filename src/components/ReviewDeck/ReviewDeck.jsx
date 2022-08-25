import { useDispatch, useSelector } from "react-redux";
import { getResReviews } from "../../redux/actions";
import { useEffect } from "react";
import ResReviewCard from "../ReviewCard/ResReviewCard";

export default function ReviewDeck({ apiId, type }) {
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getResReviews(apiId, type));
  }, []);

  let resReviews = useSelector((state) => state.resReviews);
  return (
    <div>
      <h2>Reseñas:</h2>
      <ResReviewCard resReviews={resReviews} apiId={apiId} type={type} />
    </div>
  );
}
