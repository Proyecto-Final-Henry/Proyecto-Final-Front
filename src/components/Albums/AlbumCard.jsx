import style from "../../css/songs.module.css";
function AlbumCard(props) {
    return (
        <div className={style.albumCard}>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    );
}

export default AlbumCard;