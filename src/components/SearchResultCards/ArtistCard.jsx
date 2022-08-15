import { Link } from "react-router-dom";
import style from "../../css/resultSearch.module.css";

export default function ArtistCard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt="img"></img>
      <div className={style.text}>
        <Link to={`/artist/${props.id}`}>
          <p>{props.name}</p>
        </Link>
        <p>{props.type}</p>
      </div>
    </div>
  );
};
