import GenreCard from "./GenreCard";
import style from "../../css/panelUser.module.css";

function Genres(props) {    
    if (props.genres.length !== 0) {
        return (
            <div>
                <h2 className={style.contentHome_title}>Géneros</h2>
                <div className={style.genres}>
                    {
                        props.genres && props.genres.map(genre => {
                            return (
                                <GenreCard 
                                    key = {genre.id}
                                    id = {genre.id}
                                    name = {genre.name}
                                    image = {genre.image}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    } else {
        
    };
};

export default Genres;