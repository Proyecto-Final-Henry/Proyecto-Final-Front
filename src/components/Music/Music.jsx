import style from "../../css/premium.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomSongs } from '../../redux/actions';

export default function Music() {
    let history = useHistory();
    let dispatch = useDispatch();
    let random = useSelector((state) => state.randomSongs);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
         dispatch(getRandomSongs())
    },[]);

    return (
        <div>
          {random ? (
            random.map((r) => {
              return (
                <div className={style.mainDiv} key={r.id}>
                    <p>{r.title}</p>
                    <p>{r.name}</p>
                    <img src={r.img} alt="imagen album" />
                    <Link to={"/artist/" + r.artistId}>
                        <p>{r.artist}</p>
                    </Link>
                    <Link to={"/album/" + r.albumId}>
                        <p>{r.album}</p>    
                    </Link>
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