import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Alerta from "../AlertaMensaje/Alerta";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {

  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");
  const [ alerta , setAlerta ] = useState({});

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if([email,password].includes("")){
      setAlerta({msg:"Ambos campos son requeridos" , error: true})
      setTimeout(() => {
        setAlerta({})
      },2500)
      return;
    };

    try {
      const url = `http://localhost:3001/api/back-end/users/login`
      const { data } = await axios.post( url , {email,password})
      localStorage.setItem("token", data.token)
      history.push("/feed")
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
              <h1>Login</h1>
              <div>
                  <br />
                  <label>Correo:</label>
                  <br />
                  <input 
                  type="text" 
                  className="field"
                  placeholder="Enter Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  />
              </div>
              <div>
                  <br />
                  <label>Contrasena:</label>
                  <br />
                  <input 
                  type="password" 
                  className="field" 
                  placeholder="Enter Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
                  <br />
              </div>   
              <div className="crear">
                <br />
                <br />
                  <Button type="submit" variant="outline-success">Iniciar Sesion</Button>
              </div>
              <br />
              <div>
               <Link to="/recover"> Olvidaste tu contraseña?</Link>
              </div>
              <br />
              <div>
                <Link to="/register"> Crea tu cuenta</Link>
              </div>
          </form>

        </div>
    </div>
    )
  };

export default Login;
