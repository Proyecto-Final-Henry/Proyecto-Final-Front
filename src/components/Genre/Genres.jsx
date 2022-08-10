import GenreCard from "./GenreCard";
import style from "../../css/panelUser.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres } from "../../redux/actions/actions_player";
import { getAlbumsDb } from "../../redux/actions/index";

function Genres(props) {    
    let history = useHistory();
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
        dispatch(getGenres());
        dispatch(getAlbumsDb());
    },[dispatch]);


    if (props.genres.length !== 0) {
        return (
            <div>
                <h2 className={style.contentHome_title}>Géneros</h2>
                <div className={style.genres}>
                    {
                        props.genres && props.genres.map(genre => {
                            return (
                                <GenreCard 
                                    key = {genre.id}
                                    id = {genre.id}
                                    name = {genre.name}
                                    image = {genre.image}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    } else {
        <div>
            No hay generos disponibles para mostrar
        </div>
    };
};

export default Genres;