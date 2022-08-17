import style from "../../css/info.module.css";
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
        <h2 style={{"color":"black"}}>Alguien creó la ruta pero no creo el componente que va aca</h2>
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
      </div>
    );
  };