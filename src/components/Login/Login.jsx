import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Alerta from "../AlertaMensaje/Alerta";
import axios from "axios";
import google from "../../assets/google.png";
import { useHistory } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/feed")
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({ msg: "Ambos campos son requeridos", error: true });
      setTimeout(() => {
        setAlerta({});
      }, 2500);
      return;
    };

    try {
      const url = `/api/back-end/users/login`;
      const { data } = await axios.post(url, { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("active", data.active);
      localStorage.setItem("userId", data.id);
      if (!data.active) {
        return history.push("/user/restore");
      };
      history.push("/feed");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true })
      setTimeout(() => {
        setAlerta({});
      }, 3500);
    };
  };

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
    try {
      const url = `/api/back-end/users/googleLogin`;
      const { data } = await axios.post(url, {
        name: user.displayName,
        email: user.providerData[0].email,
        userImg: user.photoURL ? user.photoURL : null,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("active", data.active);
      localStorage.setItem("userId", data.userId);
      if (!data.active) {
        return history.push("/user/restore");
      };
      history.push("/feed");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    };
  };

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

  return (
    <div className="created">
      <div className="cre">
        {msg && <Alerta alerta={alerta} className="alert" />}
        <form onSubmit={handleSubmit} className="form">
          <h1>Ingreso</h1>
          <div>
            <br />
            <label>Correo:</label>
            <br />
            <input
              type="text"
              className="field"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <br />
            <label>Contraseña:</label>
            <br />
            <input
              type="password"
              className="field"
              placeholder="Contraseña..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <div className="crear">
            <br />
            <br />
            <div className="ini">
              <Button type="submit" className="ini">
                Iniciar Sesion
              </Button>
            </div>
          </div>
          <div className="crear">
            <br />
            <div className="go">
              <button onClick={() => loginGoogle()} type="button">
                <img src={google} style={{ height: "33px" }} alt="google" />
              </button>
            </div>
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
  );
};

export default Login;
