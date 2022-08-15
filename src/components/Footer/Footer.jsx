import React from "react";
import { Link } from "react-router-dom";
import style from "../../css/footer.module.css";

export default function Footer(){
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
                        <p><Link to="/team">El equipo</Link></p>
                        <p><Link to="/contact">Contacto</Link></p>
                    </div>
                </div> 
                <h5>Hecho con <i className="fa-solid fa-heart"></i> para el mundo</h5>
            </div>
            <div className={style.footer_item}>
                <h4>Planes</h4>
                <div>
                    <div><i className="fa-solid fa-headphones-simple"></i></div>
                    <div className={style.footer_content}>
                        <p><Link to="/premium">Free</Link></p>
                        <p><Link to="/premium">Premium</Link></p>
                        <p><Link to="/register">Registro</Link></p>
                    </div>
                </div>
                <div className={style.footer_social}>
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-github"></i></span>
                    <span><i className="fa-brands fa-linkedin"></i></span>
                    <span><i className="fa-brands fa-spotify"></i></span>
                </div> 
            </div>

            {/* <div className="social">
            <h4>¡Mantente al tanto de novedades!</h4>
                <ul className={style.listaCreadores}>
                    <li>
                        <BsFacebook size="3em"/>
                    </li>
                    <li>
                        <BsGithub size="3em"/>
                    </li>
                    <li>
                        <BsLinkedin size="3em"/>
                    </li>
                    <li>
                        <BsSpotify size="3em"/>
                    </li>
                </ul>
            </div> */}
            {/* <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <div className="creadores">
                            <h4>Creadores</h4>
                            <ul className={style.listaCreadores}>
                                <li>
                                    <a href="https://github.com/JulianLechuga">Lechu</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Alejo2608">Ale</a>
                                </li>
                                <li>
                                    <a href="https://github.com/cristhian-fernandez">Cris</a>
                                </li>
                                <li>
                                    <a href="https://github.com/djstylecali">CrisX2</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Nacho1617">Nacho</a>
                                </li>
                                <li>
                                    <a href="https://github.com/MauricioCorzo">Mauri</a>
                                </li>
                                <li>
                                    <a href="https://github.com/lal-fac" className="cen">Luis</a>
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </div>
    );
};
