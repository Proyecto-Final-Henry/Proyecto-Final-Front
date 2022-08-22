import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomFeed } from "../../redux/actions";
import styles from "../../css/side.css"
import { Link } from "react-router-dom";


export default function Re(){
    let dispatch=useDispatch()
    let random=useSelector((state)=>state.randomFeed)
    if (random.length>6) {
        random.length=random.length-4
    }

    useEffect(()=>{
        dispatch(getRandomFeed())
    },[])

    return(
        <div className="side">
            <h5>Canciones Recomendadas:</h5>
        {random ? (
            <div className="song">{
                random.map((song,index) => {
                  return (
                    <div className="can" key={index}>
                        <Link to={"/song/" + song.id}>
                        <img src={song.img} alt={song.img} />
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
              <h2>Parece que no hay música aún</h2>
            </div>
          )}
        </div>
    )
}