import style from "../../css/resultSearch.module.css";

export default function AlbumCard (props){
    return(
        <div className="card">
            <img src={props.img} alt="img"></img>
            <div className={style.text}>
            <p>{props.title}</p>
            <p>{props.artist}</p>
            <p>{props.type}</p>
            </div>                       
        </div>
    );
};