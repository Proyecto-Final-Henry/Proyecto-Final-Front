import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions/actions_player";
import Genres from "../Genre/Genres";

function ContentHome() {
    const genres = useSelector((state) => state.genres);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div>
            <Genres genres={genres}/>
        </div>
    );
}

export default ContentHome;