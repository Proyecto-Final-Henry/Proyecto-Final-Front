import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
        <div>
            <br />
            <img src={ejemplo} alt="aca va el feed" />
            <h1>TODAS LAS REVIEWS</h1>
            {reviews?.map(r => {
                return <ReviewCardFeed title={r.title} score={r.score} description={r.description} name={r.user.name} userImg={r.user.userImg} />
            })}
            
        </div>
    );
};