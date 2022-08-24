import style from '../../css/searchbar.module.css'
import { Link } from "react-router-dom";
import AddTrack from "../PlayList/AddTrack";

function TrackCard(props) {
  return (
    <div  className={style.ArtistTo}>
      <div>
        <img src={props.img} alt={props.title}/>      
      </div>
      <div className={style.div_left}>
        <div className={style.linkto}>   
          <Link to={`/song/${props.id}`}>
            <p>{props.title}</p>
          </Link>
        </div>
        <div className={style.linkto}>
            <Link to={`/artist/${props.artistId}`}>
              <p>Artista: {props.artist}</p>
            </Link>
        </div>
        <div className={style.linkto}>
            <Link to={`album/${props.albumId}`}>
              <p>Album: {props.album}</p>
            </Link>
        </div>
      </div>
      <div>
          <AddTrack 
          userId={props.userId}
          trackId={props.id}
          name={props.title} />
      </div>
    </div>
  );
};

export default TrackCard;


