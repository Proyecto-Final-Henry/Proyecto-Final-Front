import { useHistory } from "react-router-dom";
import style from "../../css/premium.module.css"
import checkgif from "../../assets/mercadocheck.gif"

function PayCheck() {
    let history = useHistory();
    
    function handleCheck() {
        history.push("/")
        // algo para comprobar si el pago se hizo con exito y redirigirlo a /pay/success o /pay/error
    };

    return (
      <div className={style.mainDiv}>
        <h3>Estamos comprobando la transacción </h3>
        <img src={checkgif} alt="Comprobando tu pago"/>
      </div>
    );
  };

export default PayCheck;