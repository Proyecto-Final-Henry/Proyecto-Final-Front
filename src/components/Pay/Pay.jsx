import style from "../../css/premium.module.css"
import checkgif from "../../assets/mercadocheck.gif"

function Pay(props) {

    return (
      <div className={style.mainDiv}>
        <h3>Estamos comprobando la transacción </h3>
        <img src={checkgif} alt="Comprobando tu pago"/>
      </div>
    );
  };

export default Pay;