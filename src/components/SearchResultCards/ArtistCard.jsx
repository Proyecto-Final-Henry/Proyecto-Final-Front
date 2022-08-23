import { Link } from "react-router-dom";
import style from '../../css/searchbar.module.css'

export default function ArtistCard(props) {
  return (
    <div className={style.ArtistTo}>
      <div>
        <img src={props.img} alt="img"></img>
      </div>
      <div className={style.linkto_artist}>
        <Link to={`/artist/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
};
