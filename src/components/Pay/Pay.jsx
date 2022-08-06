import { useHistory  } from "react-router-dom";
import axios from "axios"
import style from "../../css/premium.module.css"
import { useEffect, useState } from "react";


function Pay(props) {
    let history = useHistory();

    // const [ data , setData ] = useState({})

    // useEffect(() => {
    //   const traerData = async () => {
    //     try {
    //       const response  = await axios("http://localhost:3001/api/back-end/users/feedback")
    //       setData(response)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   traerData()
    // },[])
    
    const handleButton = async () => {
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
          const { data } = await axios.post(`http://localhost:3001/api/back-end/users/create_preference`, {description: "Premium", price: 100, quantity: 3}, config)
          window.location.assign(data.id.sandbox_init_point)         
        } catch (error) {
         console.log(error) 
        }
    };

    // console.log(data? data : null)
    
    return (
      <div>
       
          <button className="btn btn-outline-success mt-3" onClick={handleButton}>Pagar</button>
        

      </div>
    );
  };

export default Pay;