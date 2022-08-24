import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Per from './PerfilSide';
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from './Re';
import { createAlbum, createGenreDb, getAllReviews, getUserData, getRandomSongs, getTopArtists, getTopSongs, getRandomArtists, clearArtist, clearAlbum, clearSong } from "../../redux/actions";
import { getGenres } from "../../redux/actions/actions_player";
import axios from "axios";
import { useState } from "react";
import { io } from "socket.io-client";

export const socket=io("http://localhost:3001"); // https://remusic.onrender.com // http://localhost:3001

export default function Feed(){
    const history = useHistory();
    let dispatch = useDispatch();
    const [user, setUser] = useState("");
    const userData = useSelector((state) => state.userData);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    useEffect(() => {
        // socket.current = io("http://localhost:3001");
        // console.log(socket)
        socket.emit("newUser", token); // userData?.id || userId
        socket.on("getUsers", (users) => {
          setOnlineUsers(users);
        });
      }, [user]);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                history.push("/login");
                return;
            }
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const { data } = await axios(`/api/back-end/users/perfil`, config);
                dispatch(getUserData(data?.id))
                setUser(data);
            } catch (error) {
                console.log(error.response.data.msg);
            };
        };
        autenticarUsuario();
        dispatch(clearArtist());
        dispatch(clearAlbum());
        dispatch(clearSong());
        dispatch(getAllReviews());
        dispatch(getGenres());
        dispatch(createGenreDb());
        dispatch(getRandomSongs());
        dispatch(getRandomArtists());
        dispatch(getTopSongs());
        dispatch(getTopArtists());
        dispatch(createAlbum());
    },[dispatch]);

    return(
        <div className="todo">
            <div className="er">
                <Per />
            </div>
            <div className="cen cen_scroll">
                <ReviewCard user={user}/>
            </div>
            <div className="ult">
                <Re/>
            </div> 
        </div>
    );
};