import ComparativoPremium from "../../assets/comparativa.png";
import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Premium() {
    let history = useHistory();

    // const [ data , setData ] = useState({})

    // useEffect(() => {
    //   const traerData = async () => {
    //     try {
    //       const response  = await axios("/api/back-end/users/feedback")
    //       setData(response)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   traerData()
    // },[])
    
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
            window.open(data.id.sandbox_init_point);   // sandbox_init_point / init_point
            history.push("/pay");
          }
        } catch (error) {
         console.log(error) ;
        };
    };

    return (
      <div>
        <br />
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

export default Premium;