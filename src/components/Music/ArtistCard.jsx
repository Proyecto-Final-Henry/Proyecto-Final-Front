import style from "../../css/premium.module.css";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ArtistCard(props) {
  return (
    <div className={style.musicCard} key={props.id}>
      <div className={style.musicCard_header}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={style.musicCard_title}>
        <h2>
          <BsMusicNoteBeamed className={style.musicNote} />
          {props.name}
        </h2>
      </div>
      <div className={style.musicCard_footer}>
        <p>{props.artist}</p>
        <Link to={"/artist/" + props.apiId}>
          <Button variant="outline-success" type="submit">
            Perfil
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ArtistCard;
