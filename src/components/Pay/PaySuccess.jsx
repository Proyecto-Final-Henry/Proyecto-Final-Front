import React, { useEffect , useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../../css/confirmar.css";
import Img from "../../assets/vaporwave.jpg";

function PaySuccess(){
  let history = useHistory();
  const [ cuentaConfirmada , setCuentaConfirmada ] = useState(false);
  const [ cargando , setCargando ] = useState(true);
  const [ alerta , setAlerta ] = useState({});
  const params = useParams();
  const { token } = params;

  useEffect(() => {
      const confirmarCuenta = async () => {
          try {
              const url = `/api/back-end/users/confirmar/${token}`
              const { data } = await axios(url)
              setCuentaConfirmada(true)
              setAlerta({msg: data.msg, error: false})
          } catch (error) {
              setAlerta({msg: error.response.data.msg , error: true})
          }
          setCargando(false)
      };
      confirmarCuenta()
      setTimeout(() => {
          history.push("/user");
        },8000)
  },[token]);

  return (
    <div className="conf">
        <div className='confi'>
            <img src={Img} alt={Img} style={{"height": "400px", "width": "800px", "borderRadius": "35px"}}/>
            <br />
            <h4> El pago ha sido un éxito </h4>
                <div className="texto">
                    <br />
                    <p>Ya puedes disfrutar de todas las funciones de ReMusic Premium </p>
                </div>
        </div>
    </div>
  );
};

export default PaySuccess;