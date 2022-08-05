import ComparativoPremium from "../../assets/comparativa.png";
import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";

function Premium() {
    let history = useHistory();
    
    function handleButton() {
        history.push("/pay")
    };

    return (
      <div>
        <div className={style.mainDiv}>
           <h1>Beneficios de Usuarios Premium</h1>          
        </div>
        
        <div className={style.mainDiv}>
            <h3>Canciones ilimitadas</h3>
            <h3>Crea tus propias playlists</h3>
            <h3>Ve quien te sigue</h3>
            <h3>Recompensas exclusivas</h3>
        </div>

        <div className={style.comparative}>
          <img src={ComparativoPremium} alt="Premium vs Free" />
        </div>
      
        <div>
          <button class="btn btn-outline-success" onClick={handleButton}>Pasate al plan Premium</button>
        </div>

      </div>
    );
  };

export default Premium;