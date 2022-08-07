import checkgif from "../../assets/mercadocheck.gif"

function Pay(props) {
    return (
      <div>
        <br /><br />
        <h3 style={{color: "white", "font-style":"italic"}}>Estamos comprobando la transacción... </h3>
        <img src={checkgif} alt="Comprobando tu pago"/>
      </div>
    );
  };

export default Pay;