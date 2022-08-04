//import {useSelector} from 'react-redux'; // descomentar cuando este llegando la data
import { useEffect , useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "../../css/users.css"

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
        <div>
            <h1>esperando data a renderizar!</h1>
            <div>
                <img src='https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg' alt='userImg'></img>
                <p className="userP">{user?.name}</p>
                <p className="userP">{user?.email}</p>
                <button onClick={cerrarSesion} >Cerrar sesion</button>
            </div>
        </div>
    )

}