import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Conversacion = ({data, usuarioActual_Id, online}) => {

    const [ userData , setUserData ] = useState(null) // usuarios con los que tengo chats activos

    useEffect(() => {
        const userId = data.members.find(id => id !== usuarioActual_Id ) // usuario id del otro 
        // console.log(userId)
        const getUserData = async () => {
            try {
                const { data } = await axios(`/api/back-end/user/${userId}`)
                setUserData(data)               
            } catch (error) {
                console.log(error)
            }
        }
        getUserData()
    },[])


  return (
    <> 
    <div className='follower conversation'>
        <div>
            {online && <div className="online-dot"></div> }
            <img src={userData?.userImg} alt="" className='followerImage' style={{width: '50px' , height: '50px'}}/>
            <div className="name" style={{fontSize: '0.8rem'}}>
                <span>{userData?.name}</span>
                <span> {online? "Conectado": "Desconectado"}</span>
            </div>
        </div>
    </div>
    <hr style={{widht: '85%' , border: '0.1px solid gray'}}/>
    </>
  )
}

export default Conversacion