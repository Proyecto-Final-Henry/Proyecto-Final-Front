import { useState } from "react";
import Alerta from "../AlertaMensaje/Alerta";
import axios from "axios"

const Register = () => {

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
    } catch (error) {
      setAlerta({msg: error.response.data.msg , error: true})
      setTimeout(() => {
        setAlerta({})
      },2500)
    }

  }


  const { msg } = alerta

    return (
      <>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label style={{color: "white"}}>Nombre</label>
          <input type="text" 
          class="form-control" 
          onChange={e => setName(e.target.value)} 
          value={name} 
          aria-describedby="emailHelp"
           placeholder="Nombre..."/>
        </div>
        <div class="form-group">
          <label style={{color: "white"}} >Direccion de email</label>
          <input 
          type="email" 
          class="form-control" 
          onChange={e => setEmail(e.target.value)} 
          value={email} 
          aria-describedby="emailHelp" 
          placeholder="Correo..."/>
        </div>
        <div class="form-group">
          <label style={{color: "white"}}>Contraseña</label>
          <input 
          type="password" 
          class="form-control" 
          onChange={e => setPassword(e.target.value)}  
          value={password} 
          placeholder="Contraseña..."/>
        </div>
        <div class="form-group">
          <label style={{color: "white"}}>Repetir Contraseña</label>
          <input 
          type="password" 
          class="form-control" 
          onChange={e => setRepetirPassword(e.target.value)}  
          value={repetirPassword} 
          placeholder="Repetir Contraseña..."/>
        </div>
        <input type="submit" class="btn btn-outline-success" value= "Registrarse"/>
      </form>
      </>
    );
  };

export default Register;