import { useEffect , useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios";
import "../../css/users.css";

export default function UserProfile (){
    //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params 
    const history = useHistory();
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
                const { data } = await axios(`/api/back-end/users/perfil`, config)
                setUser(data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
        autenticarUsuario()
    },[]);

    return(
        <div className="to">
            <div className="fe">
                <div className="car">
                    <Link to="/user" style={{"textDecoration": "none"}}>
                        <img src={user?.userImg} alt='userImg'></img>
                        <h3>{user?.name}</h3>
                    </Link>
                    <p>Desde {user?.createdDate}</p>
                    <p>Usuario {user.role}</p>
                </div>
            </div>
            <hr />
            <div className="bo">
                <Link to="/user">
                    <p>Seguidores</p>
                </Link>
                <Link to="/search">
                    <p>Crear Reseña</p>
                </Link>
                <Link to="/music">
                    <p>Musica</p>
                </Link>
            </div>
        </div>
    )
};
