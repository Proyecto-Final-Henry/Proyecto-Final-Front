import { useState } from "react";
import Alerta from "../AlertaMensaje/Alerta";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [ name , setName] = useState("")
  const [ email , setEmail ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ repetirPassword , setRepetirPassword ] = useState("")
  const [ alerta , setAlerta ] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if([name,email,password,repetirPassword].includes("")){
      setAlerta({msg:"Hay campos vacios", error: true})
      setTimeout(() => {
        setAlerta({})
      },2500)
      return
    }

    if(password !== repetirPassword){
      setAlerta({msg: "Las passwords deben ser iguales" , error: true})
      setTimeout(() => {
        setAlerta({})
      },2500)
      return
    }

    if(password.length < 6){
      setAlerta({msg: "La password es muy corta, necesita mas de 6 caracteres", error: true})
      setTimeout(()=>{
        setAlerta({})
      },2500)
      return
    }

    setAlerta({})
    try {
      const url = `http://localhost:3001/api/back-end/users/register`
      await axios.post(url, { name, password , email })
      setAlerta({msg: "Creado correctamente, revisa tu email" , error: false})
      setTimeout(() => {
        history.push("/");
      },8000)
    } catch (error) {
      setAlerta({msg: error.response.data.msg , error: true})
      setTimeout(() => {
        setAlerta({})
      },2500)
    };
  };


  const { msg } = alerta

    return (
      <>
      {msg && <Alerta alerta={alerta} />}
      <div className="created">
        <div className="cre">
          <form onSubmit={handleSubmit} className="form">
            <h1>Registro</h1>
            <label>Nombre</label>
            <input type="text" 
            className="field"
            onChange={e => setName(e.target.value)} 
            value={name} 
            aria-describedby="emailHelp"
            placeholder="Nombre..."/>
            <label>Direccion de email</label>
            <input 
            type="email" 
            className="field"
            onChange={e => setEmail(e.target.value)} 
            value={email} 
            aria-describedby="emailHelp" 
            placeholder="Correo..."/>
            <label>Contraseña</label>
            <input 
            type="password" 
            className="field"
            onChange={e => setPassword(e.target.value)}  
            value={password} 
            placeholder="Contraseña..."/>
            <label>Repetir Contraseña</label>
            <input 
            type="password" 
            className="field" 
            onChange={e => setRepetirPassword(e.target.value)}  
            value={repetirPassword} 
            placeholder="Repetir Contraseña..."/>
            <div className="crear">
                <br />
                <br />
          <Button variant="outline-success" type="submit">Registro</Button>
          </div>
          <br />
          <div>
            <Link to="/login"> Ya tienes cuenta? Inicia sesión</Link>
          </div>
        </form>
        </div>
      </div>
      </>
    );
  };

export default Register;