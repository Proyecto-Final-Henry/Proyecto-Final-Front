//import {Link} from "react-router-dom"
import style from '../../css/filters.module.css';
export default function  PlaylistCard({isModal, name, addSong, removeSong ,id, playlist, songId}){
    function hasSong(songId, playlist) {
        return playlist?.songs?.find(s => s.apiId === songId)
    }

    const show = hasSong(songId, playlist)
    return(
        <div className={style.playlist}>
            {/* aqui se dbe colocar un link a la playlist se debe hacer la ruta con id de la lista y renderizar el componente PlaylistComponent */}
          {/* <Link to={`/playlist/${playlist.id}`}><h5>{name}</h5></Link>  */}
          <div>
            <h5>{name}</h5>
          </div>
          <div>
            {show ?
            <button className={style.removebtn} name={id} onClick={removeSong}>Remover</button>:
            <button name={id} onClick={addSong}>Añadir</button>
            }
          </div>
        </div>
    )
}