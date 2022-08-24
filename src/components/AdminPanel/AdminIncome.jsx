import axios from "axios";
import { useState, useEffect } from "react";
import admin from "../../css/adminPanel.module.css"
import usersImg from "../../assets/users.png"
import chart from "../../assets/chart.png"
import premium from "../../assets/premium.png"
import ingresos from "../../assets/ingresos.png"
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redux/actions";
import style from "../../css/adminPanel.module.css";

export default function AdminIncome() {
    const [ users , setUsers ] = useState([]);
    let [newPrice, setnewPrice] = useState("");
    let dispatch = useDispatch();

    useEffect(() => {
        const allUsers = async () => {
            try {
                const { data } = await axios(`/api/back-end/user`);
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        }
        allUsers();
 },[])  

 let filtroPremium = users.filter(u => u.role === "Premium");
 let filtroGratis = users.filter(u => u.role === "Gratuito");
 let filtroAdmin = users.filter(u => u.role !== "Admin");

//  let handlePrice = () => {
//     dispatch(setPrice(newPrice))
//  };

//  function onInputChange(e) {
//     e.preventDefault()
//     setnewPrice(e.target.value)
// };

    return (
        <div className={style.component}>
            <h1>Usuarios</h1>
            <div className={admin.income}>
                <span> <img src={chart} alt="" style={{height: "35px"}}/> Numero de usuarios: <b>{filtroAdmin.length}</b> </span>
                <span> <img src={usersImg} alt="" style={{height: "35px"}}/>  Numero de usuarios Gratuitos: <b>{filtroGratis.length}</b> </span>
                <span> <img src={premium} alt="" style={{height: "35px"}}/>  Numero de usuarios Premium: <b>{filtroPremium.length}</b> </span>
                <span> <img src={ingresos} alt="" style={{height: "35px"}}/>  Ingresos actuales: <b>${filtroPremium.length * 599}</b></span>
            </div>
            {/* <div>
                <input type="number" step=".01" name="price" onChange={onInputChange}/>
                <Button onClick={handlePrice()}> Cambiar precio de subscripción </Button>
            </div> */}
        </div>

    )
};
