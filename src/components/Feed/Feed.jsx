import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Per from "./PerfilSide";
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from "./Re";
import {
  createAlbum,
  createGenreDb,
  getAllReviews,
  getUserData,
  getRandomSongs,
  getTopArtists,
  getTopSongs,
  getRandomArtists,
  clearArtist,
  clearAlbum,
  clearSong,
} from "../../redux/actions";
import { getGenres } from "../../redux/actions/actions_player";
import axios from "axios";
import { useState } from "react";
import { socket } from '../../App';

export default function Feed() {
  const history = useHistory();
  let dispatch = useDispatch();
  const [user, setUser] = useState("");
  const userData = useSelector((state) => state.userData);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const token = localStorage.getItem("token");
  let userId = localStorage.getItem("userId");

  const awaitToken = () => {
    socket.emit("newUser", userData?.id || userId); // userData?.id || userId / token
    socket.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  };

  useEffect(() => {
    const prueba = () => {
      setTimeout(() => {
        awaitToken()
      },5000)
    };
    prueba()
  }, []);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        if (Object.keys(user).length === 0) {
          const { data } = await axios(`/api/back-end/users/perfil`, config);
          dispatch(getUserData(data?.id));
          setUser(data);
        }
      } catch (error) {
        console.log(error.response.data.msg);
      }
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
  }, [dispatch]);

  return (
    <div className="todo">
      <div className="er">
        <Per />
      </div>
      <div className="cen cen_scroll">
        <ReviewCard user={user} location="feed" />
      </div>
      <div className="ult">
        <Re />
      </div>
    </div>
  );
};
