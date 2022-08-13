import { useEffect , useState } from "react"
import { Link, useHistory } from "react-router-dom"
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
    var rol=""
    if(user.role==="Base"){
        rol="Free"
    }

    return(
        <div className="to">
            <div className="fe">
                <div className="car">
                    <Link to="/user" style={{"text-decoration": "none"}}>
                        <img src={user?.userImg} alt='userImg'></img>
                        <h3>{user?.name}</h3>
                    </Link>
                    <p>Desde {user?.createdDate}</p>
                    <p>Usuario {rol}</p>
                </div>
            </div>
            <hr />
            <div className="bo">
                <Link>
                    <p>Seguidores</p>
                    <p>Crear Resena</p>
                    <p>Musica</p>

                </Link>
            </div>
        </div>

    )

}