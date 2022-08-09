import style from "../../css/premium.module.css";
import { BsMusicNoteBeamed} from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function MusicCard(props) {
    console.log('props', props);
    return (
        <div className={style.musicCard}>
            <div className={style.musicCard_header}>
                <img src={props.img} alt={props.title} />
                <Dropdown className={style.dropdown}>
                    <Dropdown.Toggle id="dropdown-basic-button" variant="success" className={style.ellipsis}>
                        •••
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href={"/artist/" + props.artistId}>Ir al artista</Dropdown.Item>
                        <Dropdown.Item href={"/album/" + props.albumId}>Ir al álbum</Dropdown.Item>
                        <Dropdown.Item href="#/addplaylist">Agregar a playlist</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={style.musicCard_title}>
                <h2><BsMusicNoteBeamed className={style.musicNote}/>{props.title}</h2>
            </div>
            <div className={style.musicCard_footer}>
                <p>{props.artist}</p>
                <Link to={"/artist/"}>
                <Button variant="outline-success" type="submit" >Reseñas</Button>
                </Link>
            </div>
            
           
        </div>
    );
}

export default MusicCard;