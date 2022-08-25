import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReviews,
  getOtherUser,
  getResReviews,
  getUserData,
  sendEmailNotifications,
} from "../../redux/actions";

export default function Follow(props) {
  let dispatch = useDispatch();
  const mapedFollowers = props?.followers?.map((f) => {
    return f.id;
  });

  let myData = useSelector((state) => state.userData);

  const hasFollower = mapedFollowers?.includes(props?.meId);

  const handleButton = async () => {
    if (hasFollower) {
      await axios.get(`/api/back-end/user/unFollow/${props.meId}/${props?.id}`);

      
      console.log(`Hola ${props.targetName}, ${myData.name}, ya NO te sigue.  ----> mail objetivo ${props.targetEmail}`);
    } else {
      await axios.get(`/api/back-end/user/follow/${props.meId}/${props?.id}`);
      let valuesNotificacion = {
        nameUser : props.targetName,
        email: props.targetEmail,
        nameFollow : myData.name
      }
      dispatch(sendEmailNotifications(valuesNotificacion));
      console.log(`Hola ${props.targetName}, ${myData.name}, ha comenzado a seguirte.  ----> mail objetivo ${props.targetEmail}`);
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
