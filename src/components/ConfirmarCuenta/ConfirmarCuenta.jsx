import React, { useEffect , useState } from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const ConfirmarCuenta = () => {
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
        }
        confirmarCuenta()
        setTimeout(() => {
            history.push("/login");
          },8000)
    },[token]);

  return (
    <div>
        <h1> Tu cuenta ha sido confirmada, comienza a disfrutar de ReMusic </h1>
    </div>
  );
};

export default ConfirmarCuenta;