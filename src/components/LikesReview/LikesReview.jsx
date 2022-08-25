import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllReviews, getOtherUser } from "../../redux/actions";
import { socket } from "../Feed/Feed";
import { emailNoti }  from "../../enviarEmailNoti.js"

export default function LikesReview(props){
    const [ userData , setUserData ] = useState(null)
    let dispatch = useDispatch();
    const mapedLikes = props?.likes?.map(l => {
        return l.id
    });
    useEffect(() => {
        const getUserData = async () => {
            try {
                const { data } = await axios(`/api/back-end/user/${props.iD}`)
                setUserData(data)               
            } catch (error) {
                console.log(error)
            }
        }
        getUserData()
    },[])
    // console.log(userData)
    
    const hasLikes = mapedLikes?.includes(props?.meId);

//     const handleButton = async (type) => {
//     await axios.put(`/api/back-end/reviews/like/${props.meId}/${props?.id}`)
//     dispatch(getAllReviews())
//     if(type === 1){
//     socket.emit("sendNotification", {
//       senderName: props.userName,
//       receiverName: props.revId,
//       title:props.title,
//       type
//     });
//     };
// };

const handlebutton = async () => {
   try {
    const { data } = await axios.post(`/api/back-end/users/prueba`, {email: userData?.email, name: userData?.name})
    console.log(data)
   } catch (error) {
    console.log(error)
   }
}

    return(
        <div>
            { hasLikes ? 
                <button className="likesReview" onClick={handlebutton}>❤️</button>
                :
                <button className="likesReview" onClick={handlebutton}>🖤</button>
            }<> : </>
            {mapedLikes?.length}
        </div>
    );
};