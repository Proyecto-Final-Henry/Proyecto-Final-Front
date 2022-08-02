import Nav from "../Nav/Nav"
import ComparativoPremium from "../../assets/comparativa.png"
import { useHistory } from "react-router-dom";

function Premium() {
    let history = useHistory();
    
    function handleButton() {
        history.push("/pay")
    }

    const style = {
        color: 'white',
      };

    return (
      <div>
        <Nav/>
        <div>
           <h1 style={style}>Beneficios de Usuarios Premium</h1>          
        </div>
        
        <div style={style}>
            <h3>Canciones ilimitadas</h3>
            <h3>Crea tus propias playlists</h3>
            <h3>Ve quien te sigue</h3>
            <h3>Recompensas exclusivas</h3>
        </div>

        <img src={ComparativoPremium} alt="Premium vs Free" />

        <button onClick={handleButton}>Pasate al plan Premium</button>
      </div>
    );
  }

export default Premium;