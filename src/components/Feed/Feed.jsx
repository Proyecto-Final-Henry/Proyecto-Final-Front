import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Per from './PerfilSide';
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from './Re';
import { createAlbum, getAllReviews } from "../../redux/actions";
import Accordion from 'react-bootstrap/Accordion';
import style from "../../css/artistDetail.module.css";
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
        dispatch(getRandomSongs());
        dispatch(getGenres());
        dispatch(createAlbum());
    },[dispatch]);

    const reviews = useSelector(state => state.allReviews);
    
    return(
        <div className="todo">
            <div className="er">
                <Per/>
            </div>
            <div className="cen">
                <h1>REVIEWS</h1>
                <ReviewCard/>
            </div>
            <div className="ult">
                <Re/>
            </div> 
        </div>
    );
};