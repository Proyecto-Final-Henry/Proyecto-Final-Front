import style from "../../css/premium.module.css";
import ArtistCard from "../Music/ArtistCard";

function CarouselRandomArtists({title, data}) {

    const fila = document.querySelector('.carouselRandomArtists');
    const next = () => {if (fila) fila.scrollLeft += fila.offsetWidth}
    const prev = () => {if (fila) fila.scrollLeft -= fila.offsetWidth;}


    return (
        <div className={style.contenedor}>
            <div className={style.contenedor_titulo_controles}>
            <h3>{title}</h3>              
            </div>

            <div className={style.contenedor_principal}>
            <button onClick={prev} className={style.flecha_izquierda}><i className="fa-solid fa-circle-chevron-left"></i></button>
            <div className={`${style.contenedor_carousel} carouselRandomArtists`}>
                <div className={style.carousel}>
                    {data.map((artist) => {
                        return (
                            <div className={`${style.card}`} key={artist.id}>
                                <ArtistCard
                                    key={artist.id}
                                    apiId={artist.apiId}
                                    id={artist.id}
                                    name={artist.name}
                                    image={artist.image}
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
}

export default CarouselRandomArtists;