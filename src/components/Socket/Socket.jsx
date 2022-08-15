// import React from 'react';
// import io from 'socket.io-client';
// import {getAllUsers} from "../../redux/actions/index.js"
// import { useSelector,useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// export default function Socket(){
//     let dispatch = useDispatch();
//     let users= useSelector((state) => state.users);
//     console.log(users)

//     useEffect(() => {
//         try {
//             const socket=io('http://localhost:3001')
//             console.log(socket.on('firstEvent', (msg)=>{
//                 console.log(msg)
//             }))
//         } catch (err) {
//             console.log(err)
//         }
//         dispatch(getAllUsers())
//     },[]);



//     return(
//         <div className="noti">
//             <h1>Noti</h1>
//         </div>
//     )
// }