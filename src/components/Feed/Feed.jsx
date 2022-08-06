import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Perfil from './PerfilFeed';
import Per from './PerfilSide';
import Re from './Re';
import ejemplo from "../../assets/ejemplo.png";
import { getAllReviews } from "../../redux/actions";
import ReviewCardFeed from "../ReviewCard/ReviewCardFeed";

export default function Feed(){
    const history = useHistory()
    let dispatch = useDispatch()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
        dispatch(getAllReviews())
    },[dispatch])

    const reviews = useSelector(state => state.allReviews)

    console.log(reviews)

    return(
        <div className="todo">
            <div className="er">
                <Per/>
            </div>
            <div className="cen">
                <Perfil/>
            </div>
            <div className="ult">
                <Re/>
            </div> 
        </div>
    );
};