import { Link } from "react-router-dom";
import style from '../../css/searchbar.module.css'

export default function UserCard(props) {
  return (
    <div className={style.ArtistTo}>
      <div>
        <img className={style.im} src={props.img} alt="img"></img>
      </div>
      <div className={style.linkto_artist}>
        <Link to={`/users/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
};