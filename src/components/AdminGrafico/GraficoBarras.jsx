import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip,Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

const BarChart = () => {
    let [refresh, setRefresh] = useState(false)

    const [ users , setUsers ] = useState([]);
    useEffect(() => {
        const allUsers = async () => {
            try {
                const { data } = await axios(`/api/back-end/user`)
                setUsers(data)
                } catch (error) {
                    console.log(error)
            }
        }
        allUsers();
 },[refresh])


const mesesGrafico = users?.map(user => new Date(user.createdDate).toLocaleString("es-ES", {month: "long"})).reverse()

const mesesGrafico2 = new Set(mesesGrafico);

const mesesGrafico3 = [...mesesGrafico2];

let usuariosFree = [];
let usuariosPremium = [];

for(let u of users){
  if(u.role ==="Gratuito") usuariosFree.push(new Date(u.createdDate).toLocaleString("es-ES", {month: "long"}))
  if(u.role === "Premium") usuariosPremium.push(new Date(u.createdDate).toLocaleString("es-ES", {month: "long"}))
}

const prueba = usuariosFree.reduce((contador, mes) => {
  contador[mes] = (contador[mes] || 0) + 1;
  return contador;
},[]);

const prueba2 = usuariosPremium.reduce((contador, mes) => {
  contador[mes] = (contador[mes] || 0) + 1;
  return contador;
},[]);

 const data = { 
  labels: [...mesesGrafico3],
  datasets: [
      {
          label: "Usuarios Gratuitos",
          data: Object.values(prueba).reverse(),
          backgroundColor: "rgb(255, 99, 132)"
      },
      {
          label: "Usuarios Premium",
          data : Object.values(prueba2).reverse(),
          backgroundColor: "rgb(54, 162, 235)"
      }
  ],
  };

  return (
        <div style={{width:650, textAlign:'center',margin:'auto'}}>
          <button onClick={() => {setRefresh(!refresh)}}> Recargar</button>
          <h1 style={{ fontSize: '35px',color: '#885197', marginBottom: '20px' }}>Usuarios Registrados</h1>
          <Bar data={data}/>
        </div>

  )
};

export default BarChart;