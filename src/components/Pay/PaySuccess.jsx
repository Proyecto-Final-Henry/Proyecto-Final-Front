import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../../css/premium.module.css";

function PaySuccess(){
    let history = useHistory();
 
    useEffect(() => {        
        setTimeout(() => {
            history.push("/");
          },8000)
          }
    ,[])

    return (
      <div className={style.mainDiv}>
        <h3>
            El pago ha sido exitoso!
           Seras redirigido en breve
        </h3>
      </div>
    );
  };

export default PaySuccess;