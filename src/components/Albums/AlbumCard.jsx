import { Link } from "react-router-dom";
import style from "../../css/songs.module.css";
function AlbumCard(props) {
  return (
    <div className={style.albumCard}>
      <Link to={`/album/${props.id}`}>
        <img src={props.img} alt={props.title} />
      </Link>
      <h2>{props.title}</h2>
    </div>
  );
};

export default AlbumCard;
