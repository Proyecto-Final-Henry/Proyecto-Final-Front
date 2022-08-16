import React from 'react';
import style from "../../css/alerta.module.css";

const Alerta = ({alerta}) => {

  const error = {
    background: "radial-gradient(circle, #e61a49 0%, #bd7685 100%)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "20px"
  }
  const succes = {
    background: "linear-gradient(0deg, #065d23 0%, #5a968a 100%)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "20px"
  }

  return (
    
    <div className={`${style.posicion} ${style.alerta}`}>  
        {
          alerta.error ? <div style={error}>
            <i class="fa-solid fa-circle-exclamation"></i> {alerta.msg}
          </div> : <div style={succes}>
            <i class="fa-solid fa-circle-check"></i> {alerta.msg}
        </div>
        }
    </div>
  );
};

export default Alerta;