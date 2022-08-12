import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dashboard from "../../assets/dashboard.jpg"
import { useSelector } from "react-redux";

export default function AdminPanel (){
    const history = useHistory();
    const [ user , setUser ] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token){
            history.push("/login");
            return;
        };
        const autenticarAdmin = async () => {
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const { data } = await axios(`/api/back-end/users/perfil`, config);
                setUser(data);
                if(data.role !== "Admin"){
                    history.push("/user");
                    return;
                    };
            } catch (error) {
                console.log(error.response.data.msg);
            };
        };
        autenticarAdmin();
        }, []);

    return (
        <div>
            <img src={dashboard} alt="panel de admin"/>
        </div>
    )
};