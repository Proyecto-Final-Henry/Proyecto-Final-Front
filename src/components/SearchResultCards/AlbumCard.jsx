import { Link } from "react-router-dom";
import style from '../../css/searchbar.module.css'

export default function AlbumCard(props) {
  return (
    <div className={style.ArtistTo_album}>
      <div>
        <img src={props.img} alt="img"></img>
      </div>
      <div className={style.div_left_album}>
        <div className={style.linkto}>
        <Link to={`album/${props.id}`}>
          <p>{props.title}</p>
        </Link>
        </div>
        <div className={style.linkto}>
        <Link to={`artist/${props.artistId}`}>
          <p>{props.artist}</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

