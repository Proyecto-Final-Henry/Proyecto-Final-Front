import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Per from './PerfilSide';
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from './Re';
import { createAlbum, createGenreDb, getAllReviews, getUserData, getRandomSongs, getTopArtists, getTopSongs, getRandomArtists } from "../../redux/actions";
import { getGenres } from "../../redux/actions/actions_player";
import axios from "axios";
import { useState } from "react";

export default function Feed(){
    const history = useHistory();
    let dispatch = useDispatch();
    const [user, setUser] = useState({});

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
            <div className="cen">
                <ReviewCard/>
            </div>
            <div className="ult">
                <Re/>
            </div> 
        </div>
    );
};