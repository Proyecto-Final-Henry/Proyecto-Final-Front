import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Perfil from './PerfilFeed';
import Per from './PerfilSide';
import ReviewCardFeed from "../ReviewCard/ReviewCardFeed";
import Re from './Re';
import { getAllReviews } from "../../redux/actions";
import CreateReview from "../CreateReview/CreateReview";

export default function Feed(){
    const history = useHistory();
    let dispatch = useDispatch();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
        dispatch(getAllReviews());
    },[dispatch]);

    const reviews = useSelector(state => state.allReviews);

    console.log(reviews);

    return(
        <div className="todo">
            <div className="er">
                <Per/>
            </div>
            <div className="cen">
                <ReviewCardFeed/>
            </div>
            <div className="ult">
                <CreateReview/>
            </div> 
        </div>
    );
};