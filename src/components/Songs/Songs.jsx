import style from "../../css/songs.module.css";
import SongCard from "./SongCard";

function Songs(props) {
    if (props.songs.length !== 0) {
        return (
            <div className={style.songs}>
                    {
                        props.songs && props.songs.map( (song,index) => {
                            let indexBase
                            props.index !== undefined? indexBase = props.index : indexBase = 0  ;
                            return (
                                <SongCard 
                                    key = {song.id}
                                    index = {indexBase+ index}
                                    id = {song.id}
                                    title = {song.title}
                                    duration = {(parseInt(song.duration) / 60).toFixed(2)}
                                    preview = {song.preview}
                                    titleAlbum = {song.album.titleAlbum}
                                    idAlbum = {song.album.isAlbum}
                                    img = {song.album.imageAlbum}
                                    userId={props.userId}
                                />
                            )
                        })
                    }
            </div>
        );
    }else{
        return (
            <div>No hay canciones</div>
        )
    };
};

export default Songs;