import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, getOtherUser } from "../../redux/actions";

export default function Follow(props){
    let dispatch = useDispatch();
    const mapedFollowers = props?.followers?.map(f => {
        return f.id
    });


    const hasFollower = mapedFollowers?.includes(props?.meId);

    const handleButton = async () => {
        if (hasFollower) {   
        await axios.get(`http://localhost:3001/api/back-end/user/unFollow/${props.meId}/${props?.id}`)
    } else {
        await axios.get(`http://localhost:3001/api/back-end/user/follow/${props.meId}/${props?.id}`)
    };
    dispatch(getOtherUser(props.id))
    dispatch(getAllReviews())
    };

    return(
        <div>
            { hasFollower ? 
                <button onClick={() => handleButton()}>Dejar de Seguir</button>:
                <button onClick={() => handleButton()}>Seguir</button>
            }
        </div>
    );
};