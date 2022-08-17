import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllReviews } from "../../redux/actions";

export default function DeleteReview(props){
    let dispatch = useDispatch();


    const handleButton = async () => {
        await axios.put(`http://localhost:3001/api/back-end/reviews/delete/${props.id}`)
        dispatch(getAllReviews())
    };

    return(
        <div>
            <button onClick={() => handleButton()}>Eliminar Reseña</button>
        </div>
    );
};