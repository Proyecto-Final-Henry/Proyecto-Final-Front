import React, { useEffect, useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomFeed } from "../../redux/actions";
import styles from "../../css/side.css"
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { socket } from '../../App';

export default function Re(){
    let dispatch = useDispatch();
    let random = useSelector((state)=>state.randomFeed);
    let sliced = random.slice(null,8);
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);
    const userData = useSelector((state) => state.userData);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
      socket.on("getNotification", (data) => {
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
    },[]);

    return(
        <div className="side">
            <h5>Canciones Recomendadas:</h5>
        {sliced ? (
            <div className="song">{
              sliced.map(song => {
                  return (
                    <div className="can" key={song.id}>
                        <Link to={"/song/" + song.apiId}>
                        <img src={song.image} alt={song.img} />
                        </Link>
                        <Link to={"/song/" + song.apiId}>
                            <p>{song.title}</p>
                        </Link>
                    </div>
                  );
                })
            }
            </div>
          ) : (
            <div>
              <h2>Estamos buscando la mejor música para tí</h2>
            </div>
          )}
        </div>
    )
}