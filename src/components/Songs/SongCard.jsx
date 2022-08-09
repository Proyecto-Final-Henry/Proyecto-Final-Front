import style from "../../css/songs.module.css";
import { BsStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SongCard(props) {
  return (
    <div className={style.songCard}>
      <div className={style.songCard_left}>
        <p>{props.index + 1}</p>
        <img src={props.img} alt={props.title} />
        <Link to={`/song/${props.id}`}>
          <h2>{props.title}</h2>
        </Link>
      </div>
      <div className={style.songCard_rigth}>
        <p>{props.duration}</p>
        <BsStopwatchFill />
      </div>
    </div>
  );
}

export default SongCard;
