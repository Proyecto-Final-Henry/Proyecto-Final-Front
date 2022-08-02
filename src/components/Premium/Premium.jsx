import Nav from "../Nav/Nav"
import ComparativoPremium from "../../assets/comparativa.png"

function Premium() {

    function handleButton() {
        history.push("/pay")
    }
    
    return (
      <div>
        <Nav/>
        <div>
           <h1>Beneficios de Usuarios Premium</h1>          
        </div>
        
        <div>
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