import React, { useState } from "react";
import axios from "axios";
import Alerta from "../AlertaMensaje/Alerta";

const RecoverPassword = () => {
    const [ email , setEmail ] = useState("");
    const [ alerta , setAlerta ] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault()

        if([email].includes("")){
            setAlerta({msg:"El email es obligatorio", error: true})
            setTimeout(() => {
                setAlerta({})
            },2500)
            return
        };

        try {
            const url = `/api/back-end/users/olvide-password`
            const { data } = await axios.post( url , {email})
            setAlerta({msg: data.msg})
        } catch (error) {
            setAlerta({msg: error.response.data.msg , error: true})
        };
    };

    const { msg } = alerta;

    return(
        <div className="created">
                <div className="cre">
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit} className="form">
                    <h1>Recupera tu contraseña</h1>
                    <div>
                        <br />
                        <label>Correo:</label>
                        <br />
                        <input 
                        type="email" 
                        className="field"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter Email"/>
                    </div> 
                    <div className="crear">
                        <br />
                        <br />
                            <input type="submit" class="btn btn-outline-success" value= "Recuperar "/>
                    </div>
                </form>
                </div>
            </div>
            );
};

export default RecoverPassword;