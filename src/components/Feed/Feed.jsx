import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ejemplo from "../../assets/ejemplo.png";

export default function Feed(){
    const history = useHistory()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
    },[])

    return(
        <div>
            <br />
            <img src={ejemplo} alt="aca va el feed" />
            
        </div>
    );
};