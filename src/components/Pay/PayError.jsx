import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../../css/premium.module.css";
import Button from 'react-bootstrap/Button';

function PayError() {
    let history = useHistory();

    return (
      <div className={style.mainDiv}>
        <br />
        <h3>
            Ha ocurrido un error durante el pago :(
        </h3>
        <br />
        <Button onClick={()=>{history.push("/pay")}} variant="outline-success" type="submit" className='boton'>Reintentar</Button>
        <br /> <br />
        <Button onClick={()=>{history.push("/")}} variant="outline-success" type="submit" className='boton'>Regresar al Home</Button>
      </div>
    );
  };

export default PayError;