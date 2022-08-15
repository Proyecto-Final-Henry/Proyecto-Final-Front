import { Link } from "react-router-dom";
import style from "../../css/panelUser.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { cleanGenre } from "../../redux/actions/actions_player";

function GenreCard(props) {
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
        dispatch(cleanGenre());
        autenticarUsuario();
    }, [GenreCard]);

    return (
        <div className="gen">
            {
                props.id ? 
                <Link to={"/genres/" + props.id} style={{"textDecoration":"none"}}>
                    <div className={style.genreCard} key={props.id}>
                        <img src={props.image} alt={props.name} />
                        <h2>{props.name}</h2>
                    </div> 
                </Link>
                : 
                null 
            }
        </div>
    );
};

export default GenreCard;