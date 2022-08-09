// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import "../../css/perfilrev.css"
// export default function UserProfile (){
//     //const data =useSelector(store => store.userData) // descomentar para subcribir el componete al stado global con la data que se pide por params 
//     let reviewArray = useSelector((state) => state.allReviews);
//     console.log(reviewArray)
//     var role="Free"
//     if (reviewArray.role==="Base") {
//         role="Free"
//     }else{
//         role="Premium"
//     }
//     return(
//             <div className="peRe">
//                 <img src={reviewArray?.userImg} alt='userImg'></img>
//                 <Link to="/user" style={{"text-decoration": "none"}}>
//                     <h4>{reviewArray?.name}</h4>
//                 </Link>
//                 <h5>{reviewArray?.role}</h5>
//             </div>
//     )

// }