import { useEffect , useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios";
import "../../css/users.css";
import Spinner from 'react-bootstrap/Spinner';
import def from "../../img/def.png"

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
                        {
                            user.userImg?
                                <div className="pri">
                                    <img src={user?.userImg} alt={def}/>
                                    <h3>{user?.name}</h3>
                                    <p>Desde {user?.createdDate}</p>
                                    <p>Usuario {user.role}</p>
                                    <hr />
                                    {
                                    user.role==="Gratuito"?
                                        <div className="bo">
                                            <p>Hazte Con Todos Los Beneficios</p>
                                            <Link to="/premium2">
                                                PRUEBA PREMIUM AHORA
                                            </Link>
                                        </div>
                                        :
                                        <div>
                                            <p>Eres Premium Alto Capo</p>
                                        </div>
                                    }
                                </div>
                                :
                                <Spinner animation="border" variant="light" />
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
};
