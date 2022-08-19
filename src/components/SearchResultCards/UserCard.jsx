import { Link } from "react-router-dom";
import style from "../../css/resultSearch.module.css";

export default function UserCard(props) {
  return (
    <div className={style.card}>
      <img className={style.im} src={props.img} alt="img"></img>
      <div className={style.text}>
        <Link to={`/users/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </div>
    </div>
  );
};