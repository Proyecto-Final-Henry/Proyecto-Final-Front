import { useEffect , useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios"
import "../../css/perfilrev.css"
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
    var role="Free"
    if (user.role==="Base") {
        role="Free"
    }else{
        role="Premium"
    }
    return(
            <div className="peRe">
                <img src={user?.userImg} alt='userImg'></img>
                <Link to="/user" style={{"text-decoration": "none"}}>
                    <h4>{user?.name}</h4>
                </Link>
                <h5>{role}</h5>
            </div>

    )

}