import { Link } from "react-router-dom";
import style from "../../css/resultSearch.module.css";

export default function AlbumCard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="img"></img>
      <div className={style.text}>
        <Link to={`album/${props.id}`}>
          <p>{props.title}</p>
        </Link>
        <p>{props.artist}</p>
        <p>{props.type}</p>
      </div>
    </div>
  );
}
