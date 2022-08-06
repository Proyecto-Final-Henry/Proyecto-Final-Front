import { Link } from "react-router-dom";
import style from "../../css/resultSearch.module.css";
export default function TrackCard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="img"></img>
      <div className={style.text}>
        <p>{props.title}</p>
        <Link to={`/artist/${props.artistId}`}>
          <p>{props.artist}</p>
        </Link>
        <p>{props.type}</p>
        <Link to={`album/${props.albumId}`}>
          <p>Album: {props.album}</p>
        </Link>
      </div>
    </div>
  );
}
