import style from "../../css/panelUser.module.css"

function GenreCard(props) {
    return (
        <div>
            {
                props.id ? <div className={style.genreCard}>
                    {/* <div> */}
                        <img src={props.image} alt={props.name} />
                        <h2>{props.name}</h2>
                    {/* </div> */}
                </div> : '' 
            }
        </div>
    );
}

export default GenreCard;