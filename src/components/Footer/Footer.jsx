import React from "react";
import { Link } from "react-router-dom";
import style from "../../css/footer.module.css";

export default function Footer(){
    const token = localStorage.getItem("token")

    return(
        <div className="footer_body">
            <div className={style.footer}>
                <div className={style.footer_item}>
                    <h4>ReMusic</h4>
                    <div>
                        <div><i className="fa-solid fa-earth-americas"></i></div>
                        <div className={style.footer_content}>
                            <a href="https://es.wikipedia.org/wiki/Argentina" target="_blank"><p>Argentina</p></a>
                            <a href="https://es.wikipedia.org/wiki/Colombia" target="_blank"><p>Colombia</p></a>
                            <a href="https://es.wikipedia.org/wiki/M%C3%A9xico" target="_blank"><p>México</p></a>
                            <a href="https://es.wikipedia.org/wiki/Per%C3%BA" target="_blank"><p>Perú</p></a>
                            <a href="https://es.wikipedia.org/wiki/Venezuela" target="_blank"><p>Venezuela</p></a>
                        </div>
                    </div> 
                </div>
                <div className={style.footer_item}>
                    <h4>¿Quiénes somos?</h4>
                    <div>
                        <div><i className="fa-solid fa-people-group"></i></div>
                        <div className={style.footer_content}>
                            {token ? <p><Link to="/team2">El equipo</Link></p> : <p><Link to="/team">El equipo</Link></p>}
                            {token ? <p><Link to="/contact2">Contacto</Link></p> : <p><Link to="/contact">Contacto</Link></p>}
                        </div>
                    </div> 
                    <h5>Hecho con <i className="fa-solid fa-heart"></i> para el mundo</h5>
                </div>
                <div className={style.footer_item}>
                    {!token ? 
                        <div>
                            <h4>Planes</h4>
                                <div><i className="fa-solid fa-headphones-simple"></i></div>
                                    <div className={style.footer_content}>
                                        <p><Link to="/premium">Información</Link></p>
                                        <p><Link to="/register">Registro</Link></p>
                                    </div>
                            </div> 
                                : 
                                null
                                }
                    <div className={style.footer_social}>
                        <span className={style.footer_icons}><a href="https://github.com/Proyecto-Final-Henry" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></span>
                        <span className={style.footer_icons}> {token ? <Link to ="/team2"><i className="fa-brands fa-linkedin"></i></Link>: <Link to ="/team"><i className="fa-brands fa-linkedin"></i></Link>}</span>
                        <span className={style.footer_icons}><a href="https://spotify.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify"></i></a></span>
                    </div> 
                </div>
            </div>
        </div>
    );
};
