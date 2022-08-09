import AlbumCard from "./AlbumCard";
import style from "../../css/songs.module.css";
function Albums(props) {
    if (props.albums.length !== 0) {
        return (
            <div className={style.albums}>
                
                    {
                        props.albums && props.albums.map( album => {
                            return (
                                <AlbumCard
                                    key = {album.id}
                                    id = {album.id}
                                    title = {album.title}
                                    img = {album.img}
                                />
                            )
                        })
                    }
                
            </div>
        );
    }else{
        return (
            <div>No hay albunes</div>
        )
    }
}

export default Albums;