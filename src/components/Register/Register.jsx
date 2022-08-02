function Register() {
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
  }

export default Register;