import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, getOtherUser } from "../../redux/actions";
import { socket } from "../Feed/Feed";

export default function LikesReview(props){
    let dispatch = useDispatch();
    const mapedLikes = props?.likes?.map(l => {
        return l.id
    });
    
    const hasLikes = mapedLikes?.includes(props?.meId);

    const handleButton = async (type) => {
    await axios.put(`http://localhost:3001/api/back-end/reviews/like/${props.meId}/${props?.id}`)
    dispatch(getAllReviews())
    if(type === 1){
    socket.emit("sendNotification", {
      senderName: props.userName,
      receiverName: props.revId,
      title:props.title,
      type
    });
    }
    };
    // const handleNotification = (type) => {
    //     type === 1 && setLiked(true);
    //     socket.emit("sendNotification", {
    //       senderName: props.userName,
    //       receiverName: props.revId,
    //       title:props.title,
    //       type
    //     });
    //   };

    return(
        <div>
            { hasLikes ? 
                <button className="likesReview" onClick={() => handleButton()}>❤️</button>:
                <button className="likesReview" onClick={() => handleButton(1)}>🖤</button>
            }<> : </>
            {mapedLikes?.length}
        </div>
    );
};