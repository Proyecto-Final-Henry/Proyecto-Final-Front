import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Per from './PerfilSide';
import ReviewCard from "../ReviewCard/ReviewCard";
import Re from './Re';
import { createAlbum, getAllReviews } from "../../redux/actions";
import Accordion from 'react-bootstrap/Accordion';
import style from "../../css/artistDetail.module.css";
import { getRandomSongs } from "../../redux/actions";
import { getGenres } from "../../redux/actions/actions_player";


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
        dispatch(getRandomSongs());
        dispatch(getRandomSongs());
        dispatch(getGenres());
        dispatch(createAlbum());
    },[dispatch]);

    const reviews = useSelector(state => state.allReviews);
    
    return(
        <div className="todo">
            <div className="er">
                <Per/>
            </div>
            <div className="cen">
                <h1>REVIEWS</h1>
                <ReviewCard/>
            </div>
            <div className="ult">
                <Re/>
            </div> 

            <Accordion defaultActiveKey="0" className={style.background}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body className={style.background_body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};