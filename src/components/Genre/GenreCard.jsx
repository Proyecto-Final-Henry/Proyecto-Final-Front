import { Link } from "react-router-dom";
import style from "../../css/panelUser.module.css"

function GenreCard(props) {
    return (
        <div>
            {
                props.id ? 
                <Link to={"/genres/" + props.id} style={{"text-decoration":"none"}}>
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