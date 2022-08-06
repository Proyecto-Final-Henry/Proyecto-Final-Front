import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Perfil from './PerfilFeed';
import Per from './PerfilSide';
import Re from './Re';


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
        <div className="todo">
            <div className="er">
                <Per/>
            </div>
            <div className="cen">
                <Perfil/>
            </div>
            <div className="ult">
                <Re/>
            </div> 
        </div>
    );
};