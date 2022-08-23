import style from "../../css/info.module.css";
import lechuga from "../../assets/team/lechuga.jpg";
import placeholder2 from "../../assets/team/placeholder2.jpg";
import fernandez from "../../assets/team/fernandez.jpg"; 
import alban from "../../assets/team/alban.jpg";
import placeholder1 from "../../assets/team/placeholder1.png";
import mauricio from "../../assets/team/mauricio.jpg";
import luis from "../../assets/team/luis.jpg";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function TeamIn() {
    let history = useHistory();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/team")
                return
            }
        };
        autenticarUsuario()
      },[]);

    return (
            <div>
                <div className={style.creadorModal}>
                    <div className="modal fade" id="JulianModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Julian Lechuga</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>
                                            Hola! Soy Julian, un Full Stack Web Developer, con especial énfasis en lenguajes como JavaScript, React, Redux, HTML, CSS, Express, etc.
                                            <br /><br />
                                            Me considero una persona organizada y eficiente al realizar las tareas que se me presenten, afrontandolas de forma metodica y analizando las mejores maneras posibles para resolverla.
                                            <br /><br />
                                            Contacto : julianlechuga12@gmail.com
                                        </h3>
                                        <br />
                                        <a href="https://github.com/JulianLechuga" target="_blank">GitHub</a>
                                        <br />
                                        <a href="https://www.linkedin.com/in/julian-lechuga/" target="_blank"> LinkedIn</a>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="AleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Alejandro Briceño</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                        <a href="https://github.com/Alejo2608" target="_blank">GitHub</a>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="CrisFerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Cristhian Fernandez</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                        <a href="https://github.com/cristhian-fernandez" target="_blank">GitHub</a>
                                        <br />
                                        <a href="https://www.linkedin.com/in/cristhian-fernandez-cumbia/" target="_blank">LinkedIn</a>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="CrisAlbModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Cristhian Alban</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                        <a href="https://github.com/djstylecali" target="_blank">GitHub</a>
                                        <br />
                                        <a href="https://www.linkedin.com/in/cristhian-arley-alban-b67825235" target="_blank">LinkedIn</a>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="NachoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ignacio Balderrama</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                        <a href="https://github.com/Nacho1617" target="_blank">GitHub</a>
                                        <br />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="MauricioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Mauricio Corzo</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>
                                            Tengo 27 años y soy de Argentina. Soy una persona en constante aprendizaje y crecimiento personal. Me encanta trabajar en equipo, resolver problemas y ayudar a las personas en lo que necesiten. Las tecnologías que uso son : HTML | CSS | JavaScript | React | Redux | Node | Express | SQL | Sequelize | Inglés C1
                                            <br />
                                            <br />
                                            Contacta conmigo en mi correo electrónico: mauricio.corzo@yahoo.com
                                        </h3>
                                        <a href="https://github.com/MauricioCorzo" target="_blank">GitHub</a>
                                        <br />
                                        <a href="https://www.linkedin.com/in/mauricio-corzo/" target="_blank">LinkedIn</a>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div className="modal fade" id="LuisModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Luis Escobedo</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> X </button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>Lorem ipsum dolor sit amet.</h3>
                                        <a href="https://github.com/lal-fac" target="_blank">GitHub</a>
                                        <br />
                                        <a href="https://www.linkedin.com/in/luis-alfonso-escobedo-padilla/" target="_blank">LinkedIn</a>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                     </div>
                </div>
                <div className="creadores">
                    <h4>Creadores</h4>
                    <div className={style.listaCreadores}>
                        <div className={style.creador}>
                            <img src={lechuga} alt="Julian Lechuga" />
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#JulianModal"> Julian Lechuga </button>
                        </div>
                        <div className={style.creador}>
                            <img src={placeholder2} alt="Alejandro Briceño" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AleModal"> Alejandro Briceño </button>
                        </div>
                        <div className={style.creador}>
                            <img src={fernandez} alt="Cristhian Fernandez" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#CrisFerModal"> Cristhian Fernandez </button>
                        </div>
                        <div className={style.creador}>
                            <img src={alban} alt="Cristhian Alban" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#CrisAlbModal"> Cristhian Alban </button>
                        </div>
                        <div className={style.creador}>
                            <img src={placeholder1} alt="Ignacio Balderrama" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#NachoModal"> Ignacio Balderrama </button>
                        </div>
                        <div className={style.creador}>
                            <img src={mauricio} alt="Mauricio Corzo" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#MauricioModal"> Mauricio Corzo </button>
                        </div>
                        <div className={style.creador}>
                            <img src={luis} alt="Luis Escobedo" />
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#LuisModal"> Luis Escobedo </button>
                        </div>
                    </div>
                </div>
            </div>
        );
      }