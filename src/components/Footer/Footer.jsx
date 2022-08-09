import React from "react";
import style from "../../css/info.module.css";
import { BsFacebook, BsGithub, BsLinkedin,BsSpotify } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';

export default function Footer(){
    return(
        <div className="footer-links">
            <div className="footer-container">
                <div className="social">
                <h4>Follow us</h4>
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
                </div>
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
        </div>
    );
};
