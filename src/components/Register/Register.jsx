import { useState } from "react";

function Register() {
  let [user, setUser] = useState({
    name: '',
    email: "",
    password: "",
 });

let [error, setError] = useState({
    name: '',
    email: "",
    password: "",
 });

 function onInputChange(e) {
  e.preventDefault()
  setUser({
      // ...videogame,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
  });
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (user.name === '') {
      setError(error = {
        ...error,
        name: 'El nombre no puede estar en blanco'
     });
    } else {
      setError(error = {
         ...error,
         name: ''
      })
  };
  if (!regexEmail.test(user.email)) {
    setError(error = {
        ...error,
        email: 'Formato de email invalido'
    }) 
  } else {
    setError(error = {
       ...error,
       email: ''
    })
   };
   if (user.password.length <= 8) { // opcional
    setError(error = {
       ...error,
       password: 'contraseña debe ser de minimo 8 caracteres'
    })
 } else {
    setError(error = {
       ...error,
       password: ''
    })
  };
 };

    return (
      <form>
        <div class="form-group">
          <label style={{color: "white"}}>Nombre</label>
          <input type="text" class="form-control" name="InputName" aria-describedby="emailHelp" placeholder="Nombre..."/>
        </div>
        <div class="form-group">
          <label style={{color: "white"}} >Direccion de email</label>
          <input type="email" class="form-control" name="InputEmail" aria-describedby="emailHelp" placeholder="Correo..."/>
        </div>
        <div class="form-group">
          <label style={{color: "white"}}>Contraseña</label>
          <input type="password" class="form-control" name="InputPassword" placeholder="Contraseña..."/>
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    );
  };

export default Register;