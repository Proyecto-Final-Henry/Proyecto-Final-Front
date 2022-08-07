import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Music() {
    let history = useHistory();
    let dispatch = useDispatch();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
         // dispatch(getAllAlbums())
         // dispatch(getAllSongs())
    },[]);

    let albumArray = useSelector((state) => state.allSongs);

    return (
        <div>
          {albumArray ? (
            albumArray.map((r) => {
              return (
                <div className={style.mainDiv} key={r.id}>
                  <p>{r.title}</p>
                  <p>Calificación: {r.score}</p>
                  <p className="reviewDescription">{r.description}</p>
                </div>
              );
            })
          ) : (
            <div className={style.mainDiv}>
              <h2>Parece que no hay música aún</h2>
              <br/>
              <h3>Recomiendanos alguna canción que te gustaria escuchar!</h3>
              <br/>
              <Link to="/contact">Contactanos</Link>
            </div>
          )}
        </div>
      );
};