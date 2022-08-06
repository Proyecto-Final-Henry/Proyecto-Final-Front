//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import axios from "axios";
import "../../css/users.css";
=======
import Pay from "../Pay/Pay"
import axios from "axios"
import "../../css/users.css"
>>>>>>> 004e0cdf4f902be8969a4f44de43cb18d685db49

export default function UserProfile (){
    //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params 
    const history = useHistory()

    const [ user , setUser ] = useState({})

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await axios(`http://localhost:3001/api/back-end/users/perfil`, config)
                setUser(data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
        autenticarUsuario()
    },[])
    const cerrarSesion = () => {
        localStorage.removeItem("token")
        history.push("/")
    }
    console.log(user)

    return(
        <div className="detail">
            <div className="detail">
                <div className="carta">
                    <img src={user?.userImg} alt='userImg'></img>
                    <h3 className="userP">{user?.name}</h3>
                    <p className="userP">{user?.email}</p>
                    <p className="userP">Desde {user?.createdDate}</p>
                    <p className="userP">Usuario {user?.role}</p>
                    <Button onClick={cerrarSesion} variant="outline-danger" type="submit" className='boton'>Cerrar Sesión</Button>
                    <Pay />
                </div>
            </div>
        </div>
    )

}