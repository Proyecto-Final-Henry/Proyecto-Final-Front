import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllReviews } from "../../redux/actions";
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/Modal";

export default function DeleteReview(props){
    let dispatch = useDispatch();

    const [isOpenAlert, openAlert, closeAlert] = useModal(false);


    const handleButtonDelete = async () => {
        await axios.put(`http://localhost:3001/api/back-end/reviews/delete/${props.id}`)
        dispatch(getAllReviews())
    };

    const handleButton = () => {
        openAlert()
    }

    return(
        <div className="deleteReview">
            <button className="btn_deleteReview" onClick={() => handleButton()}>Eliminar Reseña</button>
            <Modal isOpen={isOpenAlert} onClose={closeAlert}>
            <h4>¿Esta seguro que desea borrar su review?</h4>
            <div  className="option_deleteReview">
                <button onClick={() => handleButtonDelete()}>Si</button>
                <button onClick={closeAlert}>No</button>
            </div>
            </Modal>
        </div>
    );
};