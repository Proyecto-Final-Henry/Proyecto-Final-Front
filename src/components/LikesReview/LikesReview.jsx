import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, getOtherUser } from "../../redux/actions";
import { socket } from '../../App';

export default function LikesReview(props){
    const [liked, setLiked] = useState(false);
    let dispatch = useDispatch();
    const mapedLikes = props?.likes?.map(l => {
        return l.id
    });
    
    const hasLikes = mapedLikes?.includes(props?.meId);

    const handleButton = async (type) => {
        await axios.put(`/api/back-end/reviews/like/${props.meId}/${props?.id}`)
        dispatch(getAllReviews())
        if(type === 1){
            try {
                socket.emit("sendNotification", {
                    senderName: props.userName,
                    receiverName: props.revId,
                    title:props.title,
                    type
                    });
            } catch (error) {
                console.log(error)
            };
        };
    };

    return(
        <div>
            { hasLikes ? 
                <button className="likesReview" onClick={() => handleButton()}>❤️</button>
                :
                <button className="likesReview" onClick={() => handleButton(1)}>🖤</button>
            }<> : </>
            {mapedLikes?.length}
        </div>
    );
};