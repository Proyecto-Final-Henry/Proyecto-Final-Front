import style from "../../css/contact.module.css";
import { useState } from "react";
import { sendEmailContact } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Contact() {
    let history = useHistory();
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
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(Object.entries(error).length === 0){
            const newEmail = {
                name: input.name,
                email: input.email,
                message: input.message,
            };
            dispatch(sendEmailContact(newEmail));
            alert('Gracias por el mensaje, responderemos lo más breve posible')
            setInput({
                name: "",
                email: "",
                message: "",
            });
            setTimeout(() => {
                history.push("/");
              },5000)
        }else{
            if(input.name === '') return alert('Ingrese su nombre');
            if(error.name) return alert(error.name);
            if(error.email) return alert(error.email);
            if(error.message) return alert(error.message);
        };
    };

    return (
      <div className={style.form_contact}>
        <div className={style.contact}>
           <h2>Información de contacto</h2>          
            <p>Nos interesa saber tu experiencia en nuestra página</p>
            <p>Si tuviste algún inconveniente o queres contarnos tu opinión sobre tu página, no dudes en mandarnos un mensaje!</p>
            <p>En Music App, valoramos sobre todas las cosas la experiencia de nuestros usuarios. Cuentanos como te sientes al usar nuestra página o que ideas tienes para mejorarla.</p>
            <p><b>¡Leeremos todas las propuetas y las tendremos en cuenta!</b></p>
        </div>

        <div className="created">
            <div>
                <form onSubmit={onSubmit} className="form">
                        <h4>Contactanos Aqui</h4>
                        <input 
                            type="text" 
                            name='name'
                            value={input.name}
                            placeholder='Ingresar nombre' 
                            onChange={onInputChange} className={error.name && style.danger}/>
                        <p className={style.danger}>{error.name}</p>
                    
                        <input 
                            type="email" 
                            name='email'
                            value={input.email}
                            placeholder='Ingresar email' 
                            onChange={onInputChange} className={error.email && style.danger}/>
                        <p className={style.danger}>{error.email}</p>


                        <textarea rows="3" placeholder='Escriba aqui su mensaje' name='message' value={input.message} onChange={onInputChange} className={error.message && style.danger}>
                        </textarea>
                        <p className={style.danger}>{error.message}</p>
                    <div className="con">
                        <button type="submit" className={style.btn_send}>Enviar Mensaje</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
  };

export default Contact;

export function validateInput (input){
  let error = {};
  if(!input.name){
    error.name = '* Nombre es requerido';
  }else if(!/^[A-Za-z ]+$/.test(input.name)){
    error.name = '* Nombre es inválido, solo acepta letras';
  };
  if(!input.email){
    error.email = '* Email es requerido';
  }else if(!/\S+@\S+\.\S+/.test(input.email)){
    error.email = '* Email es inválido, ejm: prueba@gmail.com';
  };
  if(!input.message){
      error.message = '* Mensaje es requerido';
  }else if(input.message.length === 0){
      error.message = '* Mensaje es inválido';
  };
  return error;
};