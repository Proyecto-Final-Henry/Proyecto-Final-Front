import React, { useEffect, useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomFeed } from "../../redux/actions";
import styles from "../../css/side.css"
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { socket } from "./Feed";

export default function Re(){
    let dispatch=useDispatch()
    let random=useSelector((state)=>state.randomFeed)
    if (random.length>6) {
        random.length=random.length-4
    }



    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);
    const userData = useSelector((state) => state.userData);
    const [onlineUsers, setOnlineUsers] = useState([]);

    console.log(userData)

    useEffect(() => {
      console.log(socket)
      socket.on("getNotification", (data) => {
        console.log(data)
        setNotifications((prev) => [...prev, data]);
      });
    }, [socket]);
  
    const displayNotification = ({ senderName, type, title }) => {
      let action;
  
      if (type === 1) {
        action = "gustado";
      } else if (type === 2) {
        action = "commented";
      } else {
        action = "shared";
      }
      return (
        <span className="notification">{`A ${senderName} le ha ${action} tu reseña ${title}.`}</span>
      );
    };
  
    const handleRead = () => {
      setNotifications([]);
      setOpen(false);
    };
  
    useEffect(()=>{
        dispatch(getRandomFeed())
    },[])

    return(
        <div className="side">
          <div className="noti">
          <div className="icon" onClick={() => setOpen(!open)}>
                <FaRegBell/>
                {
                 notifications.length >0 &&
                <div className="counter">{notifications.length}</div>
                 }
                </div>
                {open && (
                <div className="notifications">
                 {notifications.map((n) => displayNotification(n))}
                <button className="nButton" onClick={handleRead}>
                      Mark as read
                 </button>
                </div>
                  )}
          </div>
            <h5>Canciones Recomendadas:</h5>
        {random ? (
            <div className="song">{
                random.map(song => {
                  return (
                    <div className="can">
                        <Link to={"/song/" + song.id}>
                        <img src={song.img} alt={song.img} />
                        </Link>
                        <Link to={"/song/" + song.id}>
                            <p>{song.title}</p>
                        </Link>
                    </div>
                  );
                })
            }
            </div>

          ) : (
            <div>
              <h2>Parece que no hay música aún</h2>
            </div>
          )}
        </div>
    )
}