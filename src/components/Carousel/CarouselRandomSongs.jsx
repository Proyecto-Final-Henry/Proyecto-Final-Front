import { useEffect } from "react";
import style from "../../css/premium.module.css";
// import ArtistCard from "../Music/ArtistCard";
import MusicCard from "../Music/MusicCard";

function CarouselRandomSongs({title, data}) {

    // const fila = document.querySelector(`.${style.contenedor_carousel}`);
    const fila = document.querySelector('.carouselRandomSongs');
    const next = () => {if (fila) fila.scrollLeft += fila.offsetWidth}
    const prev = () => {if (fila) fila.scrollLeft -= fila.offsetWidth;}


    return (
        <div className={style.contenedor}>
            <div className={style.contenedor_titulo_controles}>
                <h3>{title}</h3>              
            </div>

            <div className={style.contenedor_principal}>
            <button onClick={prev} className={style.flecha_izquierda}>
                <i className="fa-solid fa-circle-chevron-left"></i></button>
            <div className={`${style.contenedor_carousel} carouselRandomSongs`}>
                <div className={style.carousel}>
                    {data.map((song) => {
                        return (
                            <div className={`${style.card}`} key={song.id || song.apiId}>
                                <MusicCard
                                key={song.id}
                                id={song.id}
                                apiId = {song.apiId}
                                title={song.title}
                                album={song.album}
                                albumId={song.albumId}
                                artist={song.artist}
                                artistId={song.artistId}
                                image={song.image}
                                />
                            
                            </div>
                        );
                    })}
                </div>  
            </div>
            <button onClick={next} className={style.flecha_derecha}><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>
        </div>
    );
};

export default CarouselRandomSongs;