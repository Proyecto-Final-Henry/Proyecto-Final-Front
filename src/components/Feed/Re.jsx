import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomFeed } from "../../redux/actions";
import styles from "../../css/side.css"
import { Link } from "react-router-dom";


export default function Re(){
    let dispatch = useDispatch();
    let random = useSelector((state)=>state.randomFeed);
    let sliced = random.slice(null,8)

    useEffect(()=>{
        dispatch(getRandomFeed())
    },[]);

    return(
        <div className="side">
            <h5>Canciones Recomendadas:</h5>
        {sliced ? (
            <div className="song">{
              sliced.map(song => {
                  return (
                    <div className="can" key={song.id}>
                        <Link to={"/song/" + song.id}>
                        <img src={song.image} alt={song.img} />
                        </Link>
                        <Link to={"/song/" + song.id}>
                            <p>{song.title}</p>
                        </Link>
                    </div>
                  );
                })
            }
            </div>
          ) : (
            <div>
              <h2>Estamos buscando la mejor música para tí</h2>
            </div>
          )}
        </div>
    )
}