import style from "../../css/contact.module.css"
import { useState } from "react";
import { sendEmailContact } from "../../redux/actions";
import { useDispatch } from "react-redux";

function Contact() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        message: ""
    });

    const onInputChange = (e) => {
        e.preventDefault();
        setInput(
            {...input, [e.target.name]:e.target.value}
        );
        setError(
            validateInput({...input, [e.target.name]:e.target.value})
        );
    }
    const onSubmit = (e) => {
        e.preventDefault();
        
        if(Object.entries(error).length === 0){
            const newEmail = {
                name: input.name,
                email: input.email,
                message: input.message,
            }
            dispatch(sendEmailContact(newEmail));
            alert('Gracias por el mensaje, responderemos lo más breve posible')
            setInput({
                name: "",
                email: "",
                message: "",
            });
        }else{
            if(input.name === '') return alert('Ingrese su nombre');
            if(error.name) return alert(error.name);
            if(error.email) return alert(error.email);
            if(error.message) return alert(error.message);
        }
    }
    return (
      <div>
        <div className={style.mainDiv}>
           <h1>Información de contacto</h1>          
        </div>

        <div className={style.mainDiv}>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, veritatis harum! Animi molestias, incidunt dolor soluta est voluptas, quod temporibus obcaecati sit quam dignissimos officiis accusantium ipsa iure impedit reiciendis ad molestiae praesentium porro quia voluptatum dolorem? Assumenda nam odit eos! Maxime, ipsam enim veniam animi sunt nesciunt quibusdam porro!</h3>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laborum velit ut asperiores explicabo fugit totam distinctio voluptatibus sequi corporis. Quia nemo eum corporis dignissimos animi consectetur officia provident. Quam quidem adipisci sint commodi ducimus inventore praesentium voluptates nam facilis.</h3>
        </div>

        <h1 className={style.form_tittle}>Formulario de Contacto</h1>

        <form onSubmit={onSubmit}>
                <div className={style.form_input}>
                    <input 
                        type="text" 
                        name='name'
                        value={input.name}
                        placeholder='Ingresar nombre' 
                        onChange={onInputChange} className={error.name && style.danger}/>
                    <p className={style.danger}>{error.name}</p>
                </div>
                
                <div className={style.form_input}>
                    <input 
                        type="email" 
                        name='email'
                        value={input.email}
                        placeholder='Ingresar email' 
                        onChange={onInputChange} className={error.email && style.danger}/>
                    <p className={style.danger}>{error.email}</p>
                </div>



                <div className={style.form_input}>
                    <textarea rows="3" placeholder='Escriba aqui su mensaje' name='message' value={input.message} onChange={onInputChange} className={error.message && style.danger}>
                    </textarea>
                    <p className={style.danger}>{error.message}</p>
                </div>

                <button type="submit" className={style.btn_send}>Enviar Mensaje</button>
            </form>

      </div>
    );
  }

export default Contact;

export function validateInput (input){
  let error = {}
  if(!input.name){
    error.name = '* Nombre es requerido';
  }else if(!/^[A-Za-z ]+$/.test(input.name)){
    error.name = '* Nombre es inválido, solo acepta letras';
  }
  if(!input.email){
    error.email = '* Email es requerido';
  }else if(!/\S+@\S+\.\S+/.test(input.email)){
    error.email = '* Email es inválido, ejm: prueba@gmail.com';
  }
  if(!input.message){
      error.message = '* Mensaje es requerido';
  }else if(input.message.length === 0){
      error.message = '* Mensaje es inválido';
  }
  return error;
}