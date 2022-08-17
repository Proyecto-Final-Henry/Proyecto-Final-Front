import style from "../../css/info.module.css";

export default function Team() {
    return (
      <div>
        <h2 style={{"color":"black"}}>Alguien creó la ruta pero no creo el componente que va aca</h2>
        <div className="creadores">
                            <h4>Creadores</h4>
                            <ul className={style.listaCreadores}>
                                <li>
                                    <a href="https://github.com/JulianLechuga" target="_blank">Lechu</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Alejo2608" target="_blank">Ale</a>
                                </li>
                                <li>
                                    <a href="https://github.com/cristhian-fernandez" target="_blank">Cris</a>
                                </li>
                                <li>
                                    <a href="https://github.com/djstylecali" target="_blank">CrisX2</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Nacho1617" target="_blank">Nacho</a>
                                </li>
                                <li>
                                    <a href="https://github.com/MauricioCorzo" target="_blank">Mauri</a>
                                </li>
                                <li>
                                    <a href="https://github.com/lal-fac" target="_blank" className="cen">Luis</a>
                                </li>
                            </ul>
                        </div>
      </div>
    );
  };