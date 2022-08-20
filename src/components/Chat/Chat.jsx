import React , { useState , useEffect , useRef} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios"
import "../../css/chat.css"
import Conversacion from './Conversacion';
import ChatBox from './ChatBox';
import {io} from "socket.io-client"
import User from './User';
import { useSelector } from 'react-redux';

const Chat = () => {
    const history = useHistory();
    const socket = useRef();

    const [ user , setUser ] = useState({});

    const [ users , setUsers ] = useState([]);
    
    const [ probando , setProbando] = useState(false);

    const [ chats , setChats ] = useState([]);

    const [ currentChat , setCurrentChat ] = useState(null);

    const [ onlineUsers , setOnlineUsers ] = useState([]);

    const [ enviarMensaje , setEnviarMensaje ] = useState(null);

    const [ recibirMensaje , setRecibirMensaje ] = useState(null);

    const userData = useSelector(state => state.userData);

    useEffect(() => {
        if (user.role === "Gratuito") {
            history.push("/feed")
        };
    })
 
    console.log(userData)

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                history.push("/login");
                return;
            }
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const { data } = await axios(`/api/back-end/users/perfil`, config);
                setUser(data);
            } catch (error) {
                console.log(error.response.data.msg);
            };
        };
         autenticarUsuario()
     },[])

     useEffect( () => {
         socket.current = io("http://localhost:3001")
         socket.current.emit("new-user-add", userData?.id)
         socket.current.on("get-users", (users) => {
             setOnlineUsers(users)
            })
        }, [user])

        //Recibir mensaje del socket server
        useEffect(() => {
           socket.current.on("receive-message", (data) => {
               setRecibirMensaje(data)
           })
        })

     // Enviar mensaje al socket server
     useEffect(() => {
        if(enviarMensaje !== null){
            socket.current.emit("send-message", enviarMensaje)
        }
     },[enviarMensaje])


        useEffect(() => {
           const getChats = async () => {
               try {
                   const { data } = await axios(`/api/back-end/chat/${user?.id}`)
                   setChats(data)
                //    console.log(data)
               } catch (error) {
                   console.log(error)
               }
           }
           getChats()
        },[user, probando])

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

        const checkOnlineStatus = (chat) => {
            const chatMember = chat.members.find(member => member !== user.id)
            const online = onlineUsers.find(user => user.userId === chatMember)
            return online? true : false
        }
        
        const iniciarChat = (info) => {
            try {
                const { data } =  axios.post(`/api/back-end/chat`, {senderId: user.id , reciverId: info.id})
                 setChats(data)
                // setCurrentChat(data)
                 setProbando(!probando)
            } catch (error) {
                console.log(error)
            }
        }

       
  return (
    <div className="Chat">
        <div className="Left-side-chat">
            <div className="Chat-container">
                <div className='Chat-list'>
                <h2>Usuarios</h2> 
                    {users && users?.map(u => (u.id !== user.id)? (
                        (
                            <div key={u.id} onClick={() => iniciarChat(u)}>
                                <User user={u}/>
                            </div>
                        )
                    ) : null)}
                </div> 
                <div className="Chat-list">
                    <h2>Tus Chats</h2>
                    {chats && chats?.map(chat => (
                        <div onClick={() => setCurrentChat(chat)}>
                            <Conversacion data={chat} usuarioActual_Id={user?.id } online={checkOnlineStatus(chat)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="Right-side-chat">
            <div style={{width: '10rem', alignSelf: "flex-start"}}>
                        <ChatBox chat={currentChat} currentUser={user?.id} setEnviarMensaje={setEnviarMensaje} recibirMensaje={recibirMensaje} />
            </div>
        </div>
    </div>    
  )
}

export default Chat