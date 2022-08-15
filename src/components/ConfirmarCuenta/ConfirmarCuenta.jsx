import React, { useEffect , useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../../css/confirmar.css";
import Img from "../../img/mientras.png";

const ConfirmarCuenta = () => {
    let history = useHistory();
    const [ cuentaConfirmada , setCuentaConfirmada ] = useState(false);
    const [ cargando , setCargando ] = useState(true);
    const [ alerta , setAlerta ] = useState({});
    const params = useParams();
    const { token } = params;

    let handleButton = () => {
        history.push("/login");
    }
    
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
            setTimeout(() => {
                history.push("/user");
              },5000);
        }
        confirmarCuenta()
        setTimeout(() => {
            history.push("/login");
          },8000)
    },[token]);

  return (
    <div className="conf">
        <div className='confi'>
            <img src={Img} alt={Img} />
            <h4> Tu cuenta ha sido confirmada</h4>
                <div className="texto">
                    <br />
                    <p>Estamos muy felices de tenerte en el equipo de ReMusic</p>
                </div>
                <p>Ingresa Ahora Mismo</p>
            <Button onClick={handleButton} variant="outline-success" type="submit" className='boton'>Ingresar</Button>

        </div>
    </div>
  );
};

export default ConfirmarCuenta;