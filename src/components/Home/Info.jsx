import info1 from '../../img/info1.jpeg';
import info2 from '../../img/info2.jpeg';
import info3 from '../../img/info3.jpeg';
import style from "../../css/info.module.css";
import { Link } from 'react-router-dom';

export default function Info (){
    return (
        <div>
            <div className={style.boxTop}>
                <div className={style.boxTopChild}>
                    <img className={style.img} src={info1} alt="info 1"/>
                    <p>Conecta con tus amigos</p>          
                </div> 
                <div className={style.boxTopChild}>
                    <img className={style.img} src={info2} alt="info 2"/>
                    <p>Califica tus canciones favoritas</p>         
                </div>
                <div className={style.boxTopChild}>
                    <img className={style.img} src={info3} alt="info 3"/>
                    <p>Escucha y guarda tus canciones favoritas</p>         
                </div>

            </div>
            <div className={style.content_box}>
                <h3>Comenta de lo que más te gusta de tu cantante o canción favorita.</h3>
                <p>Cientos de canciones / Recomendaciones para ti / Favoritos en un instante / Crea tu propia playlist y mucho más</p>
                <button className={style.btn_free} ><Link to="/register"> Empieza Gratis </Link></button>
                {/* <button><Link className={style.btn_free} to="/free"> Empieza Gratis </Link></button> */}
                {/* <p className={style.Links} > <Link className={style.Links} to="/premium">USUARIO PREMIUM </Link> </p>  */}
            </div>

            <div className={style.content_description}>
                <h3>¿Por qué elegir ReMusic Premium?</h3>
                <div className={style.content_list}>
                    <div>
                        <div>
                            <h3>Reseñas y comentarios</h3>
                            <p>Escribe y descubre sobre lo que comentan de tu artista o canción favorita</p>
                        </div>
                        <div>
                            <h3>Miles de canciones y más</h3>
                            <p>Descubre cientos de canciones y artistas, más contenido extra exclusivo de ReMusic.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Crea tu propia playlist</h3>
                            <p>Agrega las canciones que te gustan y crea tus propias listas de reproducción.</p>
                        </div>
                        <div>
                            <h3>Música ilimitada</h3>
                            <p>Escucha música ilimitada y disfruta de otros contenidos de audio donde sea, cuando sea.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Seguidores</h3>
                            <p>Sigue la actividad de tus amigos o artistas favoritos y sus gustos musicales.</p>
                        </div>
                        <div>
                            <h3>Recomendaciones para ti</h3>
                            <p>Descubre nuevas canciones y artistas recomendados solo para ti.</p>
                        </div>
                    </div>
                </div>
                <button className={style.btn_free} ><Link to="/premium"> Prueba ReMusic Premium </Link></button>
            </div>
        </div>
    );
};