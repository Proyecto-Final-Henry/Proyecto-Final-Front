import React from "react";
import { Link } from "react-router-dom";
import style from "../../css/footer.module.css";

export default function Footer(){
    const token = localStorage.getItem("token")

    return(
        <div className={style.footer}>
            <div className={style.footer_item}>
                <h4>ReMusic</h4>
                <div>
                    <div><i className="fa-solid fa-earth-americas"></i></div>
                    <div className={style.footer_content}>
                        <p>Argentina</p>
                        <p>Colombia</p>
                        <p>México</p>
                        <p>Perú</p>
                        <p>Venezuela</p>
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
                                    <p><Link to="/free">Free</Link></p>
                                    <p><Link to="/premium">Premium</Link></p>
                                    <p><Link to="/register">Registro</Link></p>
                                </div>
                        </div> 
                            : 
                            null
                            }
                <div className={style.footer_social}>
                    <span className={style.footer_icons}><i className="fa-brands fa-facebook"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-github"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-linkedin"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-spotify"></i></span>
                </div> 
            </div>
        </div>
    );
};
