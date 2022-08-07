import React from "react";
import style from "../../css/resultSearch.module.css";

export default function ReviewCardFeed(props){
    
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.userImg} alt="img"/>
            <div className={style.text}>
            <p>{props.title}</p>
            <p>Score:{props.score}</p>
            <p>{props.description}</p>
            </div>                       
        </div>
    );
};