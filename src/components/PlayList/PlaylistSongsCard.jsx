import { Link } from "react-router-dom";
import PreviewPlayer from "../PreviewPlayer/PreviewPlayer";
import style from "../../css/songs.module.css";
import { getSongData, getPlaylist } from "../../redux/actions/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";



function PlaylistSongsCard(props) {

    let dispatch = useDispatch()

    const removeSong = async () => {
        try {
            await axios.put(`/api/back-end/playlist/removeSongs/${props.playlistId}`,{              
                name: props.title,
                id: props.apiId,
              });
          dispatch(getPlaylist(props.userId))
          } catch (err) {
            throw new Error("No pudimos remover tu canción");
          }
    }


  return (
    <div className={style.songCard}>
      <div className={style.songCard_left}>
        <p>{props.index + 1}</p>
        <img src={props.img} alt={props.title} />
        <Link to={`/song/${props.apiId}`}>
          <h2>{props.title}</h2>
        </Link>
        <button onClick={() => removeSong()}>Borrar</button>
      </div>
    </div>
  );
};

export default PlaylistSongsCard;