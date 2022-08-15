import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Per from './PerfilSide';
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from './Re';
import { createAlbum, createGenreDb, getAllReviews } from "../../redux/actions";
import { getRandomSongs } from "../../redux/actions";
import { getGenres } from "../../redux/actions/actions_player";

export default function Feed(){
    const history = useHistory();
    let dispatch = useDispatch();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
        dispatch(getAllReviews());
        dispatch(getRandomSongs());
        dispatch(getGenres());
        dispatch(createAlbum());
        dispatch(createGenreDb());
    },[dispatch]);
    
    return(
        <div className="todo">
            <div className="er">
                <Per/>
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