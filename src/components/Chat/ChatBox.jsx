import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "../../css/chat-box.css"
import { format } from 'timeago.js'  // dependencia que formatea el tiempo y la funcion que te dice hace cuanto(se necesita el "timestamps:true" en el modelo)
import InputEmoji from "react-input-emoji";
import send from "../../img/send.png";

const ChatBox = ({chat , currentUser, setEnviarMensaje, recibirMensaje }) => {

    const [ userData , setUserData ] = useState(null)

    const [ mensajes , setMensajes ] = useState([])

    const [ nuevoMensaje , setNuevoMensaje ] = useState("")

    const scroll = useRef()

    useEffect(() => {
        if(recibirMensaje !== null && recibirMensaje?.chatId === chat?.id){
            setMensajes([...mensajes, recibirMensaje])
        }
    },[recibirMensaje])

    useEffect(() => {
        const userId = chat?.members?.find(id => id !== currentUser )
        const getUserData = async () => {
            try {
                const { data } = await axios(`/api/back-end/user/${userId}`)
                setUserData(data)               
            } catch (error) {
                console.log(error)
            }
        }
        if(chat !== null)  getUserData()
    },[chat , currentUser])



    useEffect(() => {
        const getMensajes =  async () => {
            try {
                const { data } = await axios(`/api/back-end/mensajes/${chat.id}`)
                setMensajes(data)
            } catch (error) {
                console.log(error)
            }
        }
        if(chat !== null) getMensajes()
    },[chat])
   


    const handleChange = (nuevoMensaje) => {
        setNuevoMensaje(nuevoMensaje)
    }

    const enviarMensaje = async (e) => {
        // e.preventDefault()
        const mensaje = {
            senderId: currentUser,
            chatId: chat.id,
            text: nuevoMensaje
        }
        // Enviar mensaje a la db
        try {
            const { data } = await axios.post(`/api/back-end/mensajes`, mensaje)
            setMensajes([...mensajes, data])
            setNuevoMensaje("")
        } catch (error) {
            console.log(error)
        }

        //Envio de mensaje a socket para visualizar el msj en tiempo real
        const receiverId = chat?.members?.find(id => id !== currentUser)
        setEnviarMensaje({...mensaje, receiverId})
    }
    
    //Scroll al ultimo mensaje
    useEffect(() =>{
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    },[mensajes])

  return (
    <>
        <div className="ChatBox-container">
            {chat? (
                <>
                <div className="chat-header">
                    <div className="follower">
                        <div>
                            <img src={userData?.userImg} alt="" className='followerImage' style={{width: '50px' , height: '50px'}}/>
                            <div className="name" style={{fontSize: '0.8rem'}}>
                                <span>{userData?.name}</span>
                                <span> Online </span>
                            </div>
                        </div>
                    </div>
                    <hr style={{widht: '85%' , border: '0.1px solid gray'}}/>
                </div>
                <div className="chat-body">
                    {mensajes && mensajes?.map(mensaje => (
                        <>
                         <div ref={scroll} key={mensaje.id} className={mensaje.senderId === currentUser? "message own" : "message"}>
                            <span>{mensaje.text}</span>
                            <span>{format(mensaje.createdAt)}</span>
                         </div>
                        </>
                    ))}
                </div>
                <div className="chat-sender">
                    <div>+</div>
                    <InputEmoji 
                    value={nuevoMensaje}
                    onChange ={handleChange}
                    onEnter={enviarMensaje}
                    placeholder='Escribe un mensaje aquí'
                    />
                    <button className="send-button button" onClick={enviarMensaje}><img src={send} alt="send" /></button>
                </div>
            </>
            ): (
                <span className='chatbox-empty-message'>Selecciona un Chat para iniciar una Conversación...</span>
            )}
            
        </div>
    </>
  )
}

export default ChatBox