import style from "../../css/resultSearch.module.css";
export default function ArtistCard (props){
    
    return(
        <div className={style.card}>
            <img src={props.img} alt="img"></img>
            <div className={style.text}>
            <p>{props.name}</p>
            <p>{props.type}</p>
            </div>                       
        </div>
    )

}