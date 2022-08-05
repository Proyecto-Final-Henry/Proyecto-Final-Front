import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";

export default function Free(){
    let history = useHistory();
    
    function handleButton() {
        history.push("/register");
    };

    return (
        <div>
          <div className={style.mainDiv}>
             <h1>Disfruta de MUSIC APP y comparte tu música favorita con amigos</h1>          
          </div>
          
          <div className={style.mainDiv}>
              <h3>Califica las canciones que escuchas!</h3>
              <h3>Mira las playlists de la comunidad para encontrar nuevos favoritos!</h3>
              <h3>Sigue a tus amigos para no perderte de ninguna novedad!</h3>
              <h3>Descubre nuevos artistas y canciones todos los dias!</h3>
          </div>
  
          <div className={style.mainDiv}>
            <h3>aca puede ir el carrousel de imagenes que paso Mauri</h3>
          </div>
          <br />
          <br />
          <div>
            <button class="btn btn-outline-success" onClick={handleButton}>¡Registrate hoy mismo!</button>
          </div>
  
        </div>
      );
};