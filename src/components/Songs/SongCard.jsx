import style from "../../css/songs.module.css";
import { BsStopwatchFill } from "react-icons/bs";

function SongCard(props) {
    return ( 
        <div className={style.songCard}>
            <div className={style.songCard_left}>
                <p>{props.index+1}</p>
                <img src={props.img} alt={props.title} />
                <h2>{props.title}</h2>
            </div>
            <div className={style.songCard_rigth}>
                <p>{props.duration}</p>
                <BsStopwatchFill/>
            </div>            
        </div>
    );
}

export default SongCard;