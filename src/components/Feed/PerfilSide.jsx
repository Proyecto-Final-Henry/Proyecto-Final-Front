import { useEffect , useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios"
import "../../css/users.css"
// import {io} from "socket.io-client"

// export const socket = io("http://localhost:3001")


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

    return(
            <div className="fe">
                <div className="car">
                    <Link to="/user" style={{"text-decoration": "none"}}>
                        <img src={user?.userImg} alt='userImg'></img>
                        <h3>{user?.name}</h3>
                    </Link>
                    <p>{user?.email}</p>
                    <p>Desde {user?.createdDate}</p>
                    <p>Usuario {user?.role}</p>
                    <Button onClick={cerrarSesion} variant="outline-danger" type="submit" className='boton'>Cerrar Sesión</Button>
                </div>
            </div>
    )

}