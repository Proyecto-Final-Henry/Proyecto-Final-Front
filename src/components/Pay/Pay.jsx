import { useHistory } from "react-router-dom";
import style from "../../css/premium.module.css"

function Pay() {
    let history = useHistory();
    
    function handleButton() {
        history.push("/")
    }

    return (
      <div>
        <div className={style.mainDiv}>
            <h2> Estoy investigando esto todavia</h2>
        </div>
        <br />
        <div>
          <img src="https://yerbamateargentina.org.ar/imagenes/archivos/noticias/79288_imagen_1227x747xrecortarxagrandar.jpg?random=1608575522" alt="algun dia" />
        </div>
        <br />
        <div>
          <button class="btn btn-outline-success" onClick={handleButton}>Regresar al Home</button>
        </div>

      </div>
    );
  }

export default Pay;