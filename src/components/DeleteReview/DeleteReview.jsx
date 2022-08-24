import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, getResReviews, getUserData } from "../../redux/actions";
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";

export default function DeleteReview(props) {
  let dispatch = useDispatch();

  const [isOpenAlert, openAlert, closeAlert] = useModal(false);

  const handleButtonDelete = async () => {
    await axios.put(`/api/back-end/reviews/delete/${props.id}`);
    switch (props.location) {
      case "feed":
        closeAlert()
        return dispatch(getAllReviews());
      case "detail":
        closeAlert()
        return dispatch(getResReviews(props.apiId, props.type));
      case "user":
        closeAlert()
        return dispatch(getUserData(props.meId));
      default:
        return dispatch(getAllReviews());
    }
  };

  const handleButton = () => {
    openAlert();
  };

  return (
    <div className="deleteReview">
      <button className="btn_deleteReview" onClick={() => handleButton()}>
        Eliminar Reseña
      </button>
      <Modal isOpen={isOpenAlert} onClose={closeAlert}>
        <h4>¿Esta seguro que desea borrar su review?</h4>
        <div className="option_deleteReview">
          <button onClick={() => handleButtonDelete()}>Si</button>
          <button onClick={closeAlert}>No</button>
        </div>
      </Modal>
    </div>
  );
}
