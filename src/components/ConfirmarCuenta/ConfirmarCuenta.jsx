import React, { useEffect , useState } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Alerta from '../AlertaMensaje/Alerta';

const ConfirmarCuenta = () => {

    const [ cuentaConfirmada , setCuentaConfirmada ] = useState(false);
    const [ cargando , setCargando ] = useState(true);
    const [ alerta , setAlerta ] = useState({});

    const params = useParams();
    const { token } = params;
    
    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `http://localhost:3001/api/back-end/users/confirmar/${token}`
                const { data } = await axios(url)
                setCuentaConfirmada(true)
                setAlerta({msg: data.msg, error: false})
            } catch (error) {
                setAlerta({msg: error.response.data.msg , error: true})
            }
            setCargando(false)
        }
        confirmarCuenta()
    },[token]);

  return (
    <>
    <div>
        <h1>CONFIRMA TU CUENTA Y COMIENZA A DISFRUTAR DE LA MUSIC APP</h1>
    </div>
    </>
  );
};

export default ConfirmarCuenta;