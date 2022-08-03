import React from "react";
import Button from 'react-bootstrap/Button';

export default function Login() {
  return(
    <div className="created">
        <div className="cre">
          <form className="form">
              <h1>Login</h1>
              <div>
                  <br />
                  <label>Correo:</label>
                  <br />
                  <input 
                  type="text" 
                  className="field"
                  placeholder="Enter Email"/>
              </div>
              <div>
                  <br />
                  <label>Contrasena:</label>
                  <br />
                  <input 
                  type="text" 
                  className="field" 
                  placeholder="Enter Password"/>
                  <br />
              </div>   
              <div className="crear">
                <br />
                <br />
                  <Button variant="success">Iniciar Sesion</Button>
              </div>
          </form>
        </div>
    </div>
    );
  }
