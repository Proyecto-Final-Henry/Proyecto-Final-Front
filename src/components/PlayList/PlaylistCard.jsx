import {Link} from "react-router-dom"
export default function  PlaylistCard({isModal, name, addSong, removeSong ,id, playlist, songId}){
    function hasSong(songId, playlist) {
        return playlist?.songs?.find(s => s.apiId === songId)
    }

    const show = hasSong(songId, playlist)
    return(
        <div>
            {/* aqui se dbe colocar un link a la playlist se debe hacer la ruta con id de la lista y renderizar el componente PlaylistComponent */}
          {/* <Link to={`/playlist/${playlist.id}`}><h5>{name}</h5></Link>  */}
            <h5>{name}</h5> 
            {show ?
            <button name={id} onClick={removeSong}>Remover</button>:
            <button name={id} onClick={addSong}>Añadir</button>
            }
        </div>
    )
}