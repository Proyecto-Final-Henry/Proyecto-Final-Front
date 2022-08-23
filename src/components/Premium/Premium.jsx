import style from "../../css/premium.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import loading from "../../assets/loading.gif";

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
      if (!token) {
        history.push("/login");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
          const { data } = await axios.post(
            `/api/back-end/users/create_preference`,
            { description: "Premium", price: 1, quantity: 1 },
            config
          );
          window.open(data.id.sandbox_init_point); // sandbox_init_point / init_point
      } catch (error) {
        console.log(error);
      };
    };

    return (
      <div className={style.plan}>
      <div className="modal fade" id="MercadoModal" tabIndex="-1" role="dialog" aria-labelledby="MercadoModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="MercadoModalLabel">Pago Premium</h5>
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" aria-label="Close"> X </button>
                            </div>
                            <div className="modal-body">
                                <h4>
                                    Seras redirigido a MercadoPago
                                </h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-success" data-dismiss="modal" onClick={handleButton} data-toggle="modal" data-target="#Mercado2Modal">Ok</button>
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
             </div>

             <div className="modal fade" id="Mercado2Modal" tabIndex="-1" role="dialog" aria-labelledby="MercadoModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="MercadoModalLabel">Pago Premium</h5>
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" aria-label="Close"> X </button>
                            </div>
                            <div className="modal-body">
                                <h4>
                                    Procesando tu pago...
                                </h4>
                                <img style={{heigth:"250px", width:"350px"}} src={loading} alt="cargando..." />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
             </div>
        <br />

        <h2>Para empezar a escuchar, solo elige un plan</h2>

        <div className={`${style.plan_card} ${style.plan_free} `}>
          <h3>ReMusic Free</h3>
          <div className={style.plan_description}>
            <span><i class="fa-solid fa-circle-check"></i> Música gratis.</span>
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
            <span><i class="fa-solid fa-circle-check"></i> Música ilimitada todos los día.</span>
            <span><i class="fa-solid fa-circle-check"></i> Sigue a todos los usuarios que quieras.</span>
            <span><i class="fa-solid fa-circle-check"></i> Ver reseñas y comentarios sin restricciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Más de cientos de canciones.</span>
            <span><i class="fa-solid fa-circle-check"></i> Selecciona y escucha cualquier canción.</span>
            <span><i class="fa-solid fa-circle-check"></i> Chatea con tus amigos y seguidores.</span>
            <span><i class="fa-solid fa-circle-check"></i> Crea y comparte tus propias playlists.</span>
          </div>
          <span className={style.plan_price}>$ 599 <span>/ mes</span></span>
          <button type="button" className={`${style.btn_free} ${style.btn_premium}`}  data-toggle="modal" data-target="#MercadoModal"> Pásate a premium </button> 
          <span className={style.plan_footer}>Sin compromiso puedes cancelar cuando quieras</span>
        </div>
      </div>
    );
  };

export default Premium;