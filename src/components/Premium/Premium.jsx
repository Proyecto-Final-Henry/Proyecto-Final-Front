import Nav from "../Nav/Nav"
import ComparativoPremium from "../../assets/comparativa.png"
import style from "../../css/contact.module.css"
import { useHistory } from "react-router-dom";

function Premium() {
    let history = useHistory();
    
    function handleButton() {
        history.push("/pay")
    }

    return (
      <div>
        <Nav/>
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
      
        <button onClick={handleButton}>Pasate al plan Premium</button>
      </div>
    );
  }

export default Premium;