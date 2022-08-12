import React, { useEffect , useState } from 'react';
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

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
        }
        confirmarCuenta()
        setTimeout(() => {
            history.push("/login");
          },8000);
    },[token]);

  return (
    <div>
        <h1> Tu cuenta ha sido confirmada, comienza a disfrutar de Music App </h1>
        <Button onClick={handleButton} variant="outline-success" type="submit" className='boton'>Ingresar</Button>
    </div>
  );
};

export default ConfirmarCuenta;