import { useDispatch, useSelector } from "react-redux";
import { getResReviews } from "../../redux/actions";
import { useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function ReviewDeck({ apiId, type }) {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResReviews(apiId, type));
  }, []);

  let reviewArray = useSelector((state) => state.resReviews);

  return (
    <div>
      <ReviewCard reviewArray={reviewArray} />
    </div>
  );
}
