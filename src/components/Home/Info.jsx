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
                    <p>Escucha y guarda las listas mas famosas del momento</p>         
                </div>

            </div>
            <div className={style.boxBtn}>
                <div className={style.boxBtnChild}>
                    <div className={style.boxUl}>
                        <ul>
                            <li>
                                lorem 1
                            </li>
                            <li>
                                lorem 2
                            </li>
                            <li>
                                lorem 3
                            </li>
                            <li>
                                lorem 4
                            </li>
                            <li>
                                lorem 5
                            </li>
                        </ul>
                    </div>
                    <p className={style.Links}><Link className={style.Links} to="/free">USUARIO FREE </Link></p>          
                </div>
                <div className={style.boxBtnChild}>
                    <div className={style.boxUl}>
                        <ul>
                            <li>
                                lorem 1
                            </li>
                            <li>
                                lorem 2
                            </li>
                            <li>
                                lorem 3
                            </li>
                            <li>
                                lorem 4
                            </li>
                            <li>
                                lorem 5
                            </li>
                        </ul>
                    </div>
                    <p className={style.Links} > <Link className={style.Links} to="/premium">USUARIO PREMIUM </Link> </p>         
                </div>
            </div>
        </div>
    )
}