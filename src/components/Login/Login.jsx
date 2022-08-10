import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Alerta from "../AlertaMensaje/Alerta";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase"


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

  
const loginGoogle = async () => {
  const provider =  new GoogleAuthProvider()
  const { user } =  await signInWithPopup(auth, provider)
  console.log(user)
   try {
    const url = `http://localhost:3001/api/back-end/users/googleLogin`
    const { data } = await axios.post( url , { name: user.displayName, email: user.email, emailVerified: user.emailVerified , userImg: user.photoURL? user.photoURL : null})
    localStorage.setItem("token" , data.token)
    history.push("/feed")
   } catch (error) {
    setAlerta({msg: error.response.data.msg, error:true})
   }
}

// const loginFacebook = async () => {  
//   const provider =  new FacebookAuthProvider()
//   const { user } = await signInWithPopup(auth,provider)  //EN EL DEPOLOY CAMBIAR LA CONFIGURACION EN FACEBOOK A MODO DE PRODUCCION PROPORCIONANDO LA URL
//   try {
//     console.log(user)
//   } catch (error) {
//     console.log(error)
//   }
// }





  const { msg } = alerta;

  return(
    <div className="created">
        <div className="cre">
          {msg && <Alerta alerta={alerta} className="alert"/>}
          <form onSubmit={handleSubmit} className="form">
              <h1>Ingreso</h1>
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
                  <label>Contraseña:</label>
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
              <div className="crear">
                <br />
                <br />
                  <Button onClick={() => loginGoogle()} variant="outline-success">Iniciar Sesion Google</Button>
              </div>
              {/* <div className="crear">
                <br />
                <br />
                  <Button onClick={() => loginFacebook()} variant="outline-success">Iniciar Sesion Facebook</Button>
              </div> */}
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
