import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import {
  getAllReviews,
  getOtherUser,
  getResReviews,
  getUserData,
} from "../../redux/actions";

export default function Follow(props) {
  let dispatch = useDispatch();
  const mapedFollowers = props?.followers?.map((f) => {
    return f.id;
  });

  const hasFollower = mapedFollowers?.includes(props?.meId);

  const handleButton = async () => {
    if (hasFollower) {
      await axios.get(`/api/back-end/user/unFollow/${props.meId}/${props?.id}`);
    } else {
      await axios.get(`/api/back-end/user/follow/${props.meId}/${props?.id}`);
    }
    dispatch(getOtherUser(props.id));
    switch (props.location) {
      case "feed":
        return dispatch(getAllReviews());
      case "detail":
        return dispatch(getResReviews(props.apiId, props.type));
      case "otherUser":
        return dispatch(getUserData(props.id));
      default:
        return dispatch(getAllReviews());
    }
  };

  return (
    <div>
      {hasFollower ? (
        // <button onClick={() => handleButton()}>Dejar de Seguir</button>:
        <button className="follow" onClick={() => handleButton()}>
          Siguiendo
        </button>
      ) : (
        <button className="follow" onClick={() => handleButton()}>
          Seguir
        </button>
      )}
    </div>
  );
}
