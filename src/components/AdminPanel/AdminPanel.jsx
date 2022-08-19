import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BarChart from "../AdminGrafico/GraficoBarras";
import LineChart from "../AdminGrafico/GraficoLineal";

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
        <> 
            <BarChart/>
            <LineChart/>
        </>
    )
};