import style from "../../css/premium.module.css";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function MusicCard(props) {
  return (
    <div className={style.musicCard}>
      <div className={style.musicCard_content}>
        <div className={style.musicCard_header}>
          <img src={props.image} alt={props.title} />
          <Dropdown className={style.dropdown}>
            <Dropdown.Toggle
              id="dropdown-basic-button"
              variant="success"
              className={style.ellipsis}
            >
              •••
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                {props.apiId ? <Link to={"/song/" + props.apiId}> Ir a la canción  </Link> :  <Link to={"/song/" + props.id}>  Ir a la canción   </Link>}
              </Dropdown.Item>
              <Dropdown.Item >
                <Link to={"/album/" + props.fixAlbumId}>
                  Ir al álbum
                </Link>
              </Dropdown.Item> 
              <Dropdown.Item>
                <Link to={"#/addplaylist"}>
                  Agregar a playlist
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className={style.musicCard_title}>
          <h2>
            <BsMusicNoteBeamed className={style.musicNote} />
            {props.title}
          </h2>
        </div>
        <div className={style.musicCard_footer}>
          <p>{props.artist}</p>
          <Link to={"/song/" + props.id}>
            <Button variant="outline-success" type="submit">
              Reseñas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;
