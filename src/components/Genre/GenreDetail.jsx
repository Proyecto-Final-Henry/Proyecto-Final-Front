import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getGenre } from "../../redux/actions/actions_player";
import style from "../../css/premium.module.css";

export default function GenreDetail() {
    let history = useHistory()
    let dispatch = useDispatch();
    let genreId = useParams().id;
  
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
        autenticarUsuario();
        dispatch(getGenre(genreId));
    }, []);

    let GenreData = useSelector((state) => state.genre);
    return (
        <div className={style.mainDiv}>
            <h2 style={{"color": "white"}}>{GenreData.name}</h2>
            <img src={GenreData.image} alt="imagen de género" />
        </div>
    )
};