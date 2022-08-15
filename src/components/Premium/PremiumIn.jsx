import ComparativoPremium from "../../assets/comparativa.png";
import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function PremiumIn() {
    let history = useHistory();

    useEffect(() => {
      const autenticarUsuario = async () => {
          const token = localStorage.getItem("token")
          if(!token){
              history.push("/premium")
              return
          }
      };
      autenticarUsuario()
    },[]);
    
    const handleButton = async () => {
      const token = localStorage.getItem("token");
      if(!token){
          history.push("/login");
          return;
      };
      const config = {
          headers: {
              "Content-Type" : "application/json",
              Authorization: `Bearer ${token}`
          }
      };
        try {
          if (window.confirm("Seras redirigido a MercadoPago")) {
            const { data } = await axios.post(`/api/back-end/users/create_preference`, {description: "Premium", price: 1, quantity: 1}, config)
            window.open(data.id.init_point);   // // sandbox_init_point
            history.push("/pay");
          }
        } catch (error) {
         console.log(error) ;
        };
    };

    return (
      <div>
        <div className={style.mainDiv}>
           <h1>Beneficios de Usuarios Premium</h1>          
        </div>
        <br />
        <div className={style.mainDiv}>
            <h3>Canciones ilimitadas</h3>
            <h3>Crea tus propias playlists</h3>
            <h3>Ve quien te sigue</h3>
            <h3>Recompensas exclusivas</h3>
        </div>
        <br />
        <div className={style.comparative}>
          <img src={ComparativoPremium} alt="Premium vs Free" />
        </div>
        <div>
          <button class="btn btn-outline-success" onClick={handleButton}>Pasate al plan Premium</button>
          <br />
          <br />
        </div>
      </div>
    );
  };

export default PremiumIn;