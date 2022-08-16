import ComparativoPremium from "../../assets/comparativa.png";
import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
            window.open(data.id.init_point);   // // sandbox_init_point
            history.push("/pay");
          }
        } catch (error) {
         console.log(error) ;
        };
    };

    return (
      <div className={style.plan}>
        {/* <div className={style.mainDiv}>
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
        </div> */}

        <h2>Para empezar a escuchar, solo elige un plan</h2>

        <div className={`${style.plan_card} ${style.plan_free} `}>
          <h3>ReMusic Free</h3>
          <div className={style.plan_description}>
            <span><i class="fa-solid fa-circle-check"></i> Música gratis.</span>
            <span><i class="fa-solid fa-circle-check"></i> Escucha solo 10 canciones al día.</span>
            <span><i class="fa-solid fa-circle-check"></i> Sigue hasta 50 artistas o amigos.</span>
            <span><i class="fa-solid fa-circle-check"></i> Ver reseñas y comentarios sin restricciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Más de cientos de canciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Selecciona y escucha cualquier canción.</span>
            <span><i class="fa-solid fa-circle-check"></i> Escucha las playlists de otros usuarios.</span>
          </div>
          <span className={style.plan_price}>$ 0 <span>/ mes</span></span>
          <button className={style.btn_free} ><Link to="/register"> Pruébalo Gratis </Link></button>
          <span className={style.plan_footer}>Explora de nuevos gustos musicales</span>
        </div>

        <div className={`${style.plan_card} ${style.plan_premium} `}>
          <h3>ReMusic Premium</h3>
          <div className={style.plan_description}>
            <span><i class="fa-solid fa-circle-check"></i> Música ilimitada al día.</span>
            <span><i class="fa-solid fa-circle-check"></i> Sigue a todos los usuarios que quieras.</span>
            <span><i class="fa-solid fa-circle-check"></i> Ver reseñas y comentarios sin restricciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Más de cientos de canciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Selecciona y escucha cualquier canción.</span>
            <span><i class="fa-solid fa-circle-check"></i> Crea y comparte tus propias playlists.</span>
          </div>
          <span className={style.plan_price}>$ 24 <span>/ mes</span></span>
          <button className={`${style.btn_free} ${style.btn_premium}`} onClick={handleButton}>Pásate a premium</button>
          <span className={style.plan_footer}>Sin compromiso puedes cancelar cuando quieras</span>
        </div>
      </div>
    );
  };

export default Premium;