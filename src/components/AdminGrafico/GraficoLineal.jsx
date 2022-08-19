import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip,Legend, PointElement} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
)

const LineChart = () => {

    const [ users , setUsers ] = useState([])

    

    useEffect(() => {
        const allUsers = async () => {
            try {
                const { data } = await axios(`/api/back-end/user`)
                setUsers(data)
                } catch (error) {
                    console.log(error)
            }
        }
        allUsers()       
 },[])

const mesesGrafico = users?.map(user => new Date(user.createdDate).toLocaleString("es-ES", {month: "long"})).reverse()

const mesesGrafico2 = new Set(mesesGrafico)

const mesesGrafico3 = [...mesesGrafico2]

// let usuariosFree = []
let usuariosPremium = []

for(let u of users){
//   if(u.role ==="Gratuito") usuariosFree.push(new Date(u.createdDate).toLocaleString("es-ES", {month: "long"}))
  if(u.role === "Premium") usuariosPremium.push(new Date(u.createdDate).toLocaleString("es-ES", {month: "long"}))
}



// const prueba = usuariosFree.reduce((contador, mes) => {
//   contador[mes] = (contador[mes] || 0) + 1;
//   return contador
// },[])

const prueba2 = usuariosPremium.reduce((contador, mes) => {
  contador[mes] = (contador[mes] || 0) + 1;
  return contador
},[])

//   console.log(Object.values(prueba).reverse().map(value => value * 2))
//   console.log(Object.values(prueba2).reverse())

 let dataValues 
 if (Object.values(prueba2).length !== mesesGrafico3.length){
    dataValues = [...Object.values(prueba2)] 
    for(let i = Object.values(prueba2).length; i <= mesesGrafico3.length - Object.values(prueba2).length; i++){
      dataValues[i] = 0
    }
  } 

 const data = { 
  labels: [...mesesGrafico3],
  datasets: [
      {
          label: "Cantidad de pesos",
          data: dataValues?.map(v => v * 599,99),
          fill: true,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "rgb(255, 99, 132)",
          pointBorderWidth:5,
          pointRadius: 8,
          tension: 0.4
      },
    //   {
    //       label: "Usuarios Premium",
    //       data : Object.values(prueba2).reverse(),
    //       backgroundColor: "rgb(54, 162, 235)"
    //   }
  ],
  }
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Min and Max Settings'
      }
    },
    scales: {
      y:{ 
        min: 0
    },
      }
    }



  return (
        <div style={{width:650}}>
          <h1 style={{ fontFamily: "monospace" }}>Dinero Ganado</h1>
          <Line data={data} options={options}/>
        </div>

  )
}

export default LineChart