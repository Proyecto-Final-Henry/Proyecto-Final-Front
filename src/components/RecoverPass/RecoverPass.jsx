export default function RecoverPassword(){
    return(
<div className="created">
        <div className="cre">
          <form className="form">
              <h1>Recupera tu contraseña</h1>
              <div>
                  <br />
                  <label>Correo:</label>
                  <br />
                  <input 
                  type="text" 
                  className="field"
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
    )
}