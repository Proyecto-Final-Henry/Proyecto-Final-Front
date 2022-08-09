import React, { useEffect , useState } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

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
    <div>
        <h1> Tu cuenta ha sido confirmada, comienza a disfrutar de Music App </h1>
    </div>

  );
};

export default ConfirmarCuenta;