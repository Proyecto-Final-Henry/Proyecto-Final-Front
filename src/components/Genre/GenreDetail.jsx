import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { useEffect } from "react";
import { getGenre } from "../../redux/actions/actions_player";
// import style from "../../css/premium.module.css";
import style from "../../css/panelUser.module.css";
import { getGenreAlbum } from "../../redux/actions";

export default function GenreDetail() {
    let history = useHistory();
    let dispatch = useDispatch();
    let genreId = useParams().id;

    let GenreData = useSelector((state) => state.genre);
    let genreDb = useSelector((state) => state.genreAlbum);
  
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
        autenticarUsuario();
        dispatch(getGenre(genreId));
    }, []);

    useEffect(() => {
        dispatch(getGenreAlbum(GenreData.name))
    },[GenreData])

    return (
        <div className={style.genreDetail}>
            <div className={style.genreDetail_header} >
                <div className={style.genreDetail_img} key="main">
                    <img src={GenreData.image} alt="imagen de género" />
                </div>

                <div className={style.genreDetail_description} key="genre">
                    {GenreData.name === "Pop" || GenreData.name === "Pop internacional" || GenreData.name === "International Pop" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música pop (del inglés pop music, contracción de popular music) es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del traditional pop, en combinación con otros géneros musicales que estaban de moda en aquel momento.
                                Los términos música pop y música popular se usan a menudo de manera indistinta, aunque el segundo tiene un sentido más amplio al dar cabida a otros géneros distintos del pop que se consideren populares. 
                            </h4> 
                            <br/>   
                            <h4>
                                Como género, la música pop es muy ecléctica, tomando prestado a menudo elementos de otros estilos como el urban, el dance, el rock, la música latina, el rhythm and blues o el folk. Con todo, hay elementos esenciales que definen al pop, como son las canciones de corta a media duración, escritas en un formato básico (a menudo la estructura estrofa-estribillo), así como el uso habitual de estribillos repetidos, de temas melódicos y ganchos. 
                                La instrumentación se compone habitualmente de guitarra, batería, bajo, guitarra eléctrica, teclado, sintetizador, etc.
                            </h4>
                        </div>
                            : 
                            null}

                    {GenreData.name === "Rap/Hip Hop" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El rap es un género musical que incorpora "rima, habla rítmica y jerga apoteósica", que se interpreta en una variedad de tipos, por lo general sobre un acompañamiento musical. Los componentes del rap incluyen "contenido" (lo que se dice), "flow" (ritmo, rima) y "entrega" (cadencia, tono). El rap generalmente se interpreta sobre una pista instrumental​, aunque también puede realizarse a capella. El rap hace parte de la música hip-hop, pero los orígenes del fenómeno son anteriores a la cultura hip-hop.
                            </h4>
                            <br />
                            <h4>
                                El hip hop​ o hiphop​ es una cultura originada en el sur del Bronx y Harlem, en la ciudad de Nueva York por Afroamericanos y Latinoamericanos especialmente Puertorriqueños durante la década de 1960. ​Si bien el término hip hop o rap se usa a menudo para referirse al estilo musical y al estilo de vida, se considera que el hip hop no solo se circunscribe al ámbito musical y por el contrario consta de cuatro principales elementos: rap (oral: recitar o cantar), turntablism o "DJing" (auditiva o musical), breaking (físico: baile) y graffiti (visual: pintura)
                            </h4>
                        </div>
                        :
                        null}

                        
                    {GenreData.name === "Folk" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                Música folk es un término de origen inglés utilizado en lengua castellana generalmente para referirse a la música folclórica moderna. En algunos contextos, por influencia del sentido en lengua inglesa de la folk music, su significado se extiende a toda la música folclórica, tanto la tradicional como la más moderna basada en aquella. Los artistas de folk pueden emplear temas musicales folclóricos ya existentes haciéndoles un arreglo musical o bien tomar simplemente el estilo y crear sus propios temas originales. 
                            </h4>
                            <br />
                            <h4>
                                Es también característico de la música folk emplear instrumentos típicos de cada región, como puede ser la zampoña y la quena en varios países de América del Sur, el bombo legüero en la Argentina, el birimbao en Brasil, el banjo, la güira en la República Dominicana, el violín o la armónica en los Estados Unidos, el violín, la marimba en Guatemala, bodhrán y el tin whistle en Irlanda, la gaita en Escocia, Galicia o Asturias, el acordeón en Francia, Italia, Panamá o la música litoraleña argentina, la gralla y la dulzaina en Valencia y Cataluña, la flauta y tamboril en Zamora, la trikitixa en el País Vasco, el arpa paraguaya en Paraguay, etc.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Reggaetón" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El reguetón​ es un género musical​ que derivó del reggae en español que es a su vez un subgénero del dancehall, así como elementos principalmente de la música bounce. Nació en Puerto Rico; surgió a raíz de la popularidad del reggae en español proveniente de Panamá, junto con el hip hop durante los inicios de esa época.
                            </h4>
                            <br />
                            <h4>
                                Posteriormente, el reguetón se apartó poco a poco del reggae, pero continuó usando los mismos instrumentos y ritmos musicales pero con diferentes letras y melodías. Esto se debió a que se usaban beats de reggae pero con letras y composiciones diferentes. Similar a la salsa la cual fue una expresión cultural de la juventud hispana de principios de los años 1970, el reguetón llegó a los Estados Unidos en los años 1990 y 2000 y se ha convertido en un modo de expresión para muchos jóvenes hispanos. 
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Rock" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El rock es un amplio género de música popular originado como rock and roll a principios de la década de 1950 en Estados Unidos y que derivaría en un gran rango de diferentes estilos durante mediados de los años 60 y posteriores, particularmente en ese país y Reino Unido.​ Tiene sus raíces en el rock and roll de los años 50, estilo nacido directamente de géneros como el blues, el rhythm and blues 
                            </h4>
                            <br />
                            <h4>
                                Instrumentalmente, el rock se ha centrado en la guitarra eléctrica, normalmente como parte de un grupo integrado por batería, bajo, uno o más cantantes y, algunas veces, instrumentos de teclado como el órgano y el piano. Usualmente, el rock se basa en canciones en compás de 4/4 y una estructura verso-estribillo; sin embargo, el género se ha vuelto extremadamente diverso y las características comunes son difíciles de definir.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Dance" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música de baile, también llamado dance, es música específicamente compuesta para facilitar o acompañar el baile. Puede ser cualquier pieza musical completa o parte de un arreglo musical más grande. Desde las últimas décadas del siglo XX la música de baile se asocia normalmente a la música con ritmo y acordes especialmente concebidos para bailar y que es generalmente denominada música dance o similar.
                            </h4>
                            <br />
                            <h4>
                                Las músicas de baile tradicional y clásica suelen llevar el nombre de su danza correspondiente y a menudo es difícil saber si el nombre de la música llegó primero o el nombre del baile. Algunos géneros musicales tienen una forma de danza en paralelo, como la música barroca con la danza barroca (un minué puede ser una obra instrumental o bien una composición para danza), mientras que otros, como la música clásica y ballet clásico, presentan formas musicales no compartidas (por ejemplo, la sonata es una forma musical que no tiene una danza asociada). 
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "R&B" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El rhythm and blues, a menudo abreviado como R&B o R'n'B, es un género de música popular afroamericana que tuvo su origen en Estados Unidos en los años 1940 a partir del blues, el jazz y el góspel.​ Se describió como «una música basada en el jazz, movida, urbana y con un ritmo insistente». Constituyó la base musical para el desarrollo del rock and roll.
                            </h4>
                            <br />
                            <h4>
                                El término ha sufrido desde entonces algunas variaciones de significado. En los primeros años de la década del 1950, se solía llamar rhythm and blues a los discos de blues,​ pasando pocos años después a referirse a un blues eléctrico que incorporaba góspel y soul. En los años 1970, el rhythm and blues se convirtió en un término genérico que incluía la música soul y el funk. En los 80, se desarrolló un nuevo estilo de R&B, alejado ya del original, que pasó a conocerse como "R&B contemporáneo".
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Alternativo" || GenreData.name === "Alternative" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música alternativa es un término que engloba a todos los tipos de música que se contraponen a los modelos oficiales comúnmente aceptados.​ Este tipo de música no cuenta con rasgos diferenciadores que la conviertan en un estilo musical único y reconocible, sino que agrupa gran número de géneros musicales que se alejan de la música comercial o industrial y que tienen cada uno sus características propias.
                            </h4>
                            <br />
                            <h4>
                                Este término abarca un gran número de subgéneros, entre los que destacan el rock alternativo, el grunge, el indie, la world music, la New Wave o la música folk, Rap alternativo, Cumbia alternativa, entre otros. No obstante, los artistas representativos de la música alternativa no siempre se encuadran dentro del mismo subgénero, sino que cada una de sus composiciones puede corresponderse a un tipo distinto de música alternativa.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Electro" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                Electro (abreviatura tanto de electro funk como de electro boogie o electro disco)​ es un género temprano de música electrónica directamente influido por el uso de cajas de ritmos TR-808,​ la interpretación con sintetizadores Moog y el sampling de canciones funk. Un disco típico de este género incluye como norma general ritmos programados mediante caja de ritmos y potentes sonidos electrónicos desprovistos normalmente de vocales, aunque en ocasiones cuente con ellas, si bien normalmente distorsionadas mediante vocoder.
                            </h4>
                            <br />
                            <h4>
                                Estas características son las que diferencian al electro de otros géneros dominantes a finales de los años 1970 como el disco y el boogie, en los cuales los sonidos electrónicos eran solo parte de la instrumentación y no la base de toda la canción como en el electro. El electro sirvió también de base para el surgimiento de la música electrónica de baile (especialmente en el house y sus formas derivadas) y para géneros modernos de hip hop.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Reggae" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El reggae o regué​ es un género musical originado en Jamaica en los años 60. Este se suele dividir en ska (1960-1966), rocksteady (1966-1968), reggae (1969-1983) y dancehall (desde mediados de los años 1980 en adelante, aunque pueden considerarse su inicio a finales de los años 70 como un proceso gradual en el que los deejays ganaron popularidad a los cantantes tradicionales).
                            </h4>
                            <br />
                            <h4>
                                En sentido estricto, el reggae es la música desarrollada entre 1969 y 1983, un período de mayor diversidad musical que las anteriores en la que el bajo eléctrico asumió un papel más central y conforme fue pasando el tiempo del período aumentó la influencia del movimiento Rasta en las letras y el sonido.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Jazz" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El jazz es un género musical nacido a finales del siglo XIX en los Estados Unidos, que se expandió de forma global a lo largo del siglo XX. La identidad musical del jazz es compleja y no puede ser delimitada con facilidad. Aunque a menudo el término se use para hacer referencia a un idioma musical (tal como se hace, por ejemplo, cuando se habla de música clásica), el jazz es en realidad una familia de géneros musicales que comparten características comunes, pero no representan individualmente la complejidad de género como un todo.
                            </h4>
                            <br />
                            <h4>
                                Sus diversas "funciones sociales" (el jazz puede servir como música de fondo para reuniones o como música de baile, pero ciertos tipos de jazz exigen una escucha atenta y concentrada) requieren un ángulo de estudio diferente; y en tercer lugar, el tema racial siempre ha generado un profundo debate sobre el jazz, moldeando su recepción por parte del público. Si bien el jazz es un producto de la cultura afroamericana, siempre ha estado abierto a influencias de otras tradiciones musicales variando con la mezcla de culturas, y ya desde la década de 1920 ha sido ejecutado por músicos de diversas partes del mundo con un trasfondo muy diferente.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Clásica" || GenreData.name === "Classical"  ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música clásica (también llamada música académica) es la corriente musical que se basa principalmente en la música producida o derivada de las tradiciones de la música litúrgica y secular de Occidente, principalmente Europa Occidental, y que posee un referente de transmisión fundamentalmente de tipo escrito, lo cual le da un sentido y carácter riguroso para su reproducción o interpretación. Aunque de forma amplia abarca un periodo de tiempo que va aproximadamente del siglo xi a la actualidad, es frecuente que se restrinja su uso para referirse a la Música Académica anterior al siglo xx, aunque en esencia y a pesar de que la música clásica propia del siglo xx posee estilísticamente diferencias substanciales con la producida en siglos anteriores, es esta considerada el resultado del mismo proceso evolutivo experimentado anteriormente.
                            </h4>
                            <br />
                            <h4>
                                Si bien,​ las principales características del género fueron codificadas principalmente entre 1550 y 1900, que es habitualmente considerado como el período característico de producción de la música clásica, su desarrollo se extiende a todo el siglo xx y xxi. En un sentido historiográfico, la música clásica antigua se divide en varios periodos: música antigua o medieval, que abarca el periodo comprendido por la Baja Edad Media en Europa (1000-1400); la música renacentista (1400-1600); la música barroca, que coincide con desarrollo del arte barroco (1600-1750); el clasicismo (1750-1800), que en la Historia de la música y la musicología es a veces llamado «música clásica»;​ el Romanticismo (1800-1910); y la música contemporánea, que comprende las distintas corrientes de música clásica del siglo xx, que adopta la composición atonal y disonante y otras tendencias opuestas a corrientes anteriores.
                            </h4>
                        </div>
                        :
                        null}

                    {GenreData.name === "Metal" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El heavy metal, o simplemente metal (pronunciado como métal)​, en español traducido literalmente como «metal pesado», es un género musical que nació a finales de los años sesenta y principios de los setenta en el Reino Unido y también en los Estados Unidos, cuyos orígenes provienen del blues rock, hard rock y del rock psicodélico. Se caracteriza principalmente por sus guitarras fuertes y distorsionadas, ritmos enfáticos, los sonidos del bajo y la batería son más densos de lo habitual y la voz es generalmente aguda o gutural.
                            </h4>
                            <br />
                            <h4>
                                Hasta el día de hoy no existe un consenso preciso que defina cuál fue la primera banda de heavy metal, algunos mencionan a Led Zeppelin​ y Deep Purple, mientras que otros dejan ese sitial exclusivamente a Black Sabbath.5​ Por aquel mismo tiempo, a finales de los años 1960 y principios de los años 1970, surgieron muchas bandas que si bien no tuvieron el impacto mediático de las mencionadas anteriormente. . En la segunda mitad de los setenta y en pleno auge del punk surgió la Nueva ola del heavy metal británico (abreviada comúnmente como NWOBHM) liderada por Iron Maiden, Saxon y Def Leppard y de la que formaron parte los muy influyentes ex post Diamond Head​ o Venom,​ que dio un nuevo valor al género derivando en el nacimiento de una posterior subcultura a ambos lados del Atlántico (influyendo la NWOBHM notablemente en el surgimiento de nuevas bandas estadounidenses como Manowar, Savatage o Queensrÿche a finales de esa década).
                            </h4>
                        </div>
                        :
                        null}
                    {GenreData.name === "Películas/Juegos" || GenreData.name === "Films/Games" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                Por música cinematográfica se entiende toda música, por lo general orquestada e instrumental, compuesta específicamente para acompañar las escenas de una película y apoyar la narración cinematográfica. Dentro de este tipo también se encuentra la llamada "música incidental". Esta música forma parte de la banda sonora de la película, típicamente abreviada como "BSO", que también puede incluir música preexistente, diálogos y efectos de sonido, y comprende una serie de piezas orquestales, instrumentales o corales llamadas señales, que están programadas para comenzar y finalizar en puntos específicos durante la película con el fin de mejorar la narración dramática y el impacto emocional de la escena en cuestión. Las partituras están escritas por uno o más compositores, bajo la guía o colaboración del director o productor de la película y generalmente son interpretadas por un conjunto de músicos, la mayoría de las cuales incluyen una orquesta o banda, solistas instrumentales y coro o vocalistas. - y grabado por un ingeniero de sonido. Las bandas sonoras originales "BSO" de las películas abarcan una enorme variedad de estilos de música, dependiendo de la naturaleza de las películas a las que acompañan. 
                            </h4>
                            <br />
                            <h4>
                                La música de videojuegos, en particular desde comienzos del siglo XX, es considerada como un género musical por derecho propio, principalmente por tratarse en su mayor parte de música programada, a diferencia de la música grabada en estudio o interpretada en directo. Las canciones casi siempre tienen secciones principales o «secciones estrofa» consistentes en una Progresión de cuatro o más acordes (parecido a buena parte del J-Pop y del pop occidental de los años 1980), frente a las progresiones de dos acordes presentes en la mayoría de las canciones pop occidentales. El «estribillo» de las canciones también contienen a menudo cuatro o más acordes diferentes en sus progresiones. En general, habría un mayor número de secciones en una canción de este género que en una canción pop parecida, pues esto ayuda a reducir el aspecto repetitivo de la música, al reproducirse normalmente como un bucle continuo. Ademas, las canciones presentan una fuerte sincronización entre instrumentos, de forma que sería difícil de tocar para un humano.
                            </h4>
                        </div>
                        :
                        null}
                    {GenreData.name === "Folklore Argentino" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música folklórica de Argentina encuentra sus raíces en la multiplicidad de culturas indígenas originarias.​ Cuatro grandes acontecimientos históricos-culturales la fueron moldeando: la colonización española y la inmigración africana forzada causada por el tráfico de esclavos durante la dominación española (siglos xvi-xviii); la gran ola de inmigración europea (1880-1950)​ y la gran migración interna (1930-1980).
                            </h4>
                            <br />
                            <h4>
                                Aunque estrictamente "el folklore" solo es aquella expresión cultural que reúne los requisitos de ser anónima, popular y tradicional, en Argentina se conoce como folklore o música folklórica a la música popular de autor conocido, inspirada en ritmos y estilos característicos de las culturas provinciales, mayormente de raíces indígenas y afro-hispano colonial. Técnicamente, la denominación adecuada es música de proyección folklórica de Argentina.
                            </h4>
                        </div>
                        :
                        null}   
                    {GenreData.name === "Romantica" || GenreData.name === "Romantic" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>s
                                En la música, el Romanticismo fue un período que transcurrió, aproximadamente, entre los años 1810 y la primera década del siglo XX, y suele englobar toda la música escrita de acuerdo a las normas y formas de dicho período. El Romanticismo musical es un período de la música académica que fue precedido por el Clasicismo y seguido por el Impresionismo. Está relacionado, por supuesto, con el Romanticismo en otras disciplinas: la corriente de cambios en Literatura, Bellas Artes y Filosofía, aunque suele haber ligeras diferencias temporales dado que, el Romanticismo en aquellas Artes y en la Filosofía, se suele reconocer entre los años 1780 y 1840. El Romanticismo como movimiento global en las Artes y la Filosofía tiene como precepto que la verdad no podía ser deducida a partir de axiomas y que, en el mundo, había realidades inevitables que solo se podían captar mediante la emoción, el sentimiento y la intuición. La música del Romanticismo intentaba expresar estas emociones hacia una persona u objeto al cual quiere o aprecia.
                            </h4>
                            <br />
                            <h4>
                                El período romántico musical duró de 1820 hasta 1914 por lo cual el instrumento más utilizado fue el piano, donde compositores como Chopin, Liszt, Schumann, Schubert, se dedicaron a componer un extenso repertorio basado en sonatas y conciertos. En el campo de la música sinfónica orquestal fue el Poema Sinfónico creado por Franz Liszt, era una pieza de un movimiento, libre de las ataduras de la forma y la Sinfonía Programática creada por Hector Berlioz, alcanzando su más fuerte expresión y sentido universal, alcanzando parámetros nuevos en el arte, por fuera de la música en sí misma. En el canto lírico, la forma Lied de Brahms, Mendelssohn, Liszt y Schubert, eran piezas para voz (por lo general masculinas) con acompañamiento de piano.
                            </h4>
                        </div>
                        :
                        null}
                    {GenreData.name === "Soul & Funk" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El soul es un término adoptado para describir la música afroamericana en los Estados Unidos a medida que esta evolucionó entre las décadas de 1950 y 1970.​ También se lo considera simplemente como un término nuevo para el género musical conocido como Rhythm and blues (R&B).​ En este sentido, una generación de artistas reinterpretó los sonidos de los pioneros del R&B de la década de 1950: Bo Diddley, Chuck Berry, Little Richard, Ray Charles y Sam Cooke, cuya música encontró acogida entre la población blanca estadounidense y se transformó en el género rock and roll.
                            </h4>
                            <br />
                            <h4>
                                El funk es un género musical que nació entre mediados y finales de los años 1960, cuando músicos principalmente afroamericanos fusionaron soul, jazz, ritmos latinos (mambo, por ejemplo) y R&B dando lugar a una nueva forma musical rítmica y bailable. El funk reduce el protagonismo de la melodía y de la armonía y dota, a cambio, de mayor peso a la percusión y a la línea de bajo eléctrico. Las canciones de funk suelen basarse en un vamp (una figura, sección o acompañamiento repetidos) extendido sobre un solo acorde, distinguiéndose del R&B y el soul, más centrados alrededor de la progresión de acordes.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Blues" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El blues es un género musical vocal e instrumental, basado en la utilización de notas de blues y de un patrón repetitivo, que suele seguir una estructura de doce compases. Originario de las comunidades afroamericanas del sur de los Estados Unidos a principios del siglo XX, en los años sesenta este género se convirtió en una de las influencias más importantes para el desarrollo de la música popular estadounidense y occidental. Se lo lee en géneros musicales como el ragtime, jazz, bluegrass, rhythm and blues, rock and roll, funk, heavy metal, hip-hop, música country y pop.
                            </h4>
                            <br />
                            <h4>
                                Este género se desarrolló a través de las espirituales, canciones de oración, canciones de trabajo, rimas inglesas, baladas escocesas e irlandesas narradas y gritos de campo. La utilización de las notas del blues y la importancia de los patrones de llamada y respuesta, tanto en la música como en las letras, son indicativos de la herencia africana-occidental de este género. Un rasgo característico del blues es el uso extensivo de las técnicas "expresivas" de la guitarra (bend, vibrato, slide) y de la armónica (cross harp), que posteriormente influirían en solos de estilos como el rock.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Cumbia" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La cumbia es un género musical y baile que tuvo su origen en Colombia y en Panamá pero que, en la actualidad, se ha popularizado en el resto de América Latina y cuenta con numerosas variantes y adaptaciones. La historia cuenta que, en Colombia, la cumbia surgió en la costa del Caribe a partir de la fusión cultural entre los indígenas, los esclavos que llegaban desde África y los españoles durante la Colonia. En Panamá también se desarrolló durante la época colonial, con coreografías y música de origen africano y pasos de danza aportados por andaluces, gallegos e indígenas.
                            </h4>
                            <br />
                            <h4>
                                A partir de la década de 1940, la cumbia colombiana comenzó a expandirse a otros países latinoamericanos. Así fueron apareciendo subgéneros como la cumbia argentina, la cumbia mexicana, la cumbia peruana y la cumbia venezolana, entre otros. Entre los instrumentos más habituales de las bandas de cumbia tradicional, se encuentran los tambores, las gaitas colombianas, la flauta de millo, el maracón y el guache. Las diversas adaptaciones del género pueden incluir violines, acordeones, flautas traversas y teclados
                            </h4>
                        </div>
                        :
                        null} 
                    {GenreData.name === "Niños" || GenreData.name === "Kids" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                Una canción infantil es aquella canción realizada con algún propósito para los niños pequeños y bebés. La letra suele ser muy sencilla y repetitiva, para su fácil comprensión y memorización. Además de la diversión que pueden pasar, es como los padres introducen de buena manera a sus hijos en el mundo de la música. Tradicionalmente, las canciones infantiles se transmiten de generación en generación y forman parte de la cultura popular, aunque en las últimas décadas han surgido numerosos artistas especializados en producir música y espectáculos audiovisuales dirigidos al público infantil.
                            </h4>
                            <br />
                            <h4>
                                Los cantos infantiles son una actividad en la cual los niños aprenden, ya sea jugando y otras cantando diferentes melodías, con temas variados que ayudan a ampliar sus conocimientos sobre el medio ambiente que los rodea. Las canciones infantiles poseen unas letras sencillas, rimadas y muy repetitivas, generalmente van acompañadas de movimiento, gesto o juegos motrices. Son de fácil comprensión, de fácil memorización, y de letra graciosa. La canción infantil es una actividad lúdica donde el niño aprende jugando al mismo tiempo que participa en la conservación y goce del patrimonio cultural universal.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Latino" || GenreData.name === "Latin Music" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música de América Latina (también, música latina) comprende géneros autóctonos de la región como el bolero, la salsa, la bossa nova, la música tropical, el merengue o la bachata, entre otros, y también los géneros que derivan de estilos más internacionales como el pop latino, el reguetón, el trap, el rock y el jazz latino. En su forma más generalizada, la música Latina es interpretada en español.
                            </h4>
                            <br />
                            <h4>
                                Existen diversos estilos de música latina en el continente americano, en los cuales predomina en diferente grado elementos musicales europeos, africanos o indígenas. En el pasado habían sugerido posiciones extremas, como que la música latina estaba privada de la influencia africana, o por el contrario, que era puramente africana y carecía de elementos indígenas y europeos. Hoy en día, está generalmente aceptado que los ritmos latinos son sincréticos. Específicamente, las formas españolas de composición de canciones, los ritmos africanos y la armonía europea son partes importantes de la música tropical latina, así como de los géneros más modernos como el rock, el heavy metal, el punk, el hip hop, el jazz, el ska, el reggae y el R&B.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Música africana" || GenreData.name === "African Music" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El Norte de África es la cuna de la cultura mediterránea, incluyendo a Egipto y Cartago antes de ser gobernada sucesivamente por griegos, romanos y godos y convertirse posteriormente en el Magreb del mundo árabe. Como los géneros musicales del Valle del Nilo y del Cuerno de África, sus músicas porque son dos música tiene lazos con la música de Oriente Próximo.
                            </h4>
                            <br />
                            <h4>
                                África del Este y las islas del Océano Índico han tenido una ligera influencia de la música árabe así como por la música de la India, música de Indonesia y la música de Polinesia. Sin embargo, las tradiciones musicales indígenas de la región están basadas en la cultura de pueblos subsaharianos como los hablantes de lenguas Níger-Congo.    
                            </h4>
                            <h4>
                                África del Sur, Central y África Occidental comparten una tradición musical subsahariana entendida en sentido amplio, si bien toman también influencias de Europa Occidental y Norteamérica. Las formas musicales y de baile de la diáspora africana, incluyendo la música afroamericana y muchos géneros caribeños como soca, calipso y zouk, así como géneros de música latinoamericana como rumba, salsa, se basaron en mayor o menor medida en la música de los esclavos africanos, lo que al tiempo influenció la música popular africana.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Música asiática" || GenreData.name === "Asian Music" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                            La música de Asia Central es tan amplia y única como las numerosas culturas y pueblos que habitan la región. Los principales tipos de instrumentos son los laúdes de dos o tres cuerdas, con los cuellos con o sin trastes; las violines de crin; las flautas, en su mayoría abiertas por ambos extremos y sopladas por los extremos o por los costados; y las arpas judías, en su mayoría de metal. Los instrumentos de percusión incluyen tambores de marco, panderetas y timbales. La polifonía instrumental se consigue principalmente con laúdes y violines.
                            </h4>
                            <br />
                            <h4>
                            La música del medio oriente se genera gracias a los distintos pueblos de la región incluyen los países de habla árabe de Oriente Medio, las tradiciones iraníes de Persia, la música judía de Israel y de la diáspora, la música armenia, la música kurda, la música azerí, las variadas tradiciones de la música chipriota, la música de Turquía, la música tradicional asiria, la música ritual copta de Egipto, así como otros géneros de la música egipcia en general, y la música andaluza (España musulmana) muy viva en el gran Oriente Medio (norte de África), todos mantienen sus propias tradiciones. Se considera que algunos estilos musicales de Oriente Medio han influido en Asia Central, así como en España y los Balcanes.
                            </h4>
                            <br />
                            <h4>
                            La música del sudeste asiático engloba numerosas tradiciones y estilos musicales en muchos países del sudeste asiático. Esta subregión está formada por once países, a saber, Brunéi, Camboya, Timor Oriental, Indonesia, Laos, Malasia, Myanmar, Filipinas, Singapur, Tailandia y Vietnam, que albergan cientos de grupos étnicos. Hay miles de estilos musicales como resultado de los grupos regionales que hablan muchas lenguas en toda la subregión de Asia. El regionalismo suele ser aceptado y celebrado, pero a veces es reprimido por la población, aunque los países del sudeste asiático intentan construir culturas nacionales. El hinduismo, el budismo, el islamismo y el cristianismo son las principales confesiones en el sudeste asiático. A lo largo de la historia hasta la actualidad, la música instrumental y vocal se ha centrado en la vida religiosa de la subregión asiática. La urbanización ha contribuido a asimilar las prácticas musicales y religiosas. Aunque la modernización ha supuesto una importante amenaza para las tradiciones musicales regionales distintivas, la mayoría de los países de la región han mantenido su propio estilo y naturaleza de la música, que engloba varios periodos de desarrollo de la música, la cultura y las creencias.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Música Brasileña" || GenreData.name === "Brazilian Music" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música de Brasil es un viejo reflejo de la diversidad cultural de este país, con influencias Africanas, Indígenas, Lusas y otras Europeas. La samba y la bossa nova, son los géneros más conocidos. Aun así, hay varios géneros paradigmáticos que identifican la música brasileña. Como todas las expresiones de la cultura brasileña, la música de Brasil es una mezcla de muy diversas influencias, gestando a lo largo de su historia una gran variedad de ritmos regionales. Tradiciones musicales de Europa, ritmos africanos y estilos indígenas se han hibridado desde la época de la colonia para conformar un panorama de sonidos único en el mundo.
                            </h4>
                            <br />
                            <h4>
                                Se integra de dos corrientes: una tradición escrita y erudita, de raíz europea, y otra no escrita, popular, producto de la aculturación entre las músicas europeas, africanas e indígenas. Las fusiones genuinas entre diversos estilos y géneros han devenido en el crisol de ritmos Brasileños que conviven en la actualidad, con el samba y la bossa nova como estandartes nacionales. Al conjunto de ritmos típicos de Brasil se le conoce como música popular Brasileña o MPB.
                            </h4>
                        </div>
                        :
                        null}     
                    {GenreData.name === "Música india" || GenreData.name === "Indian Music" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música de la India o música hindú incluye múltiples variedades de música tradicional, música pop y la música clásica de India. Incluye la música clásica indostaní y la música carnática y cuenta con una historia de varios milenios. La música clásica ligera o semiclásica incluye los siguientes géneros: thumri, dadra, ghazal, chaiti, kajri y tappa. Aunque están basados en los ragas, hay más licencia en la interpretación fuera de los límites formales de los ragas.
                            </h4>
                            <br />
                            <h4>
                                Los instrumentos musicales de la India se pueden clasificar en su tipo de emisión de sonido: de cuerda pulsada, membranófonos, idiófonos y de viento e incluyen el armonio, piano (por influencia europea), sitar, guitarra, tabla. El ritmo es modal. La música védica se limitaba a tres valores: ligero-pesado-extendido, es decir, a 1, 2 o 3 tiempos, para lo cual la música deshi ensamblaba dos valores breves.
                            </h4>
                        </div>
                        :
                        null}
                    {GenreData.name === "Christian" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música cristiana es la música creada y ejecutada como expresión del cristianismo. Esa expresión abarca una gran diversidad de estilos musicales que contienen letras con mensajes bíblicos o que involucran diferentes tipos de oración (de adoración, de acción de gracias, de petición), y cuya motivación principal es la fe cristiana. La música cristiana es de origen judío:​ la liturgia musical de la sinagoga, en particular el canto psalmódico de los judíos como unidad poética musical, fue un legado transmitido del Israel antiguo al cristianismo primitivo,2​ como forma de manifestar tanto a nivel personal como comunitario las creencias religiosas y la fe en Dios.
                            </h4>
                            <br />
                            <h4>
                                La definición y el objetivo de música cristiana varían en función de la denominación cristiana que la promueva. Se considera una herramienta útil, tanto para evangelizar al creyente,​ como para tratar aspectos de la vida que ha de llevar un cristiano.
                            </h4>
                        </div>
                        :
                        null}  
                    {GenreData.name === "Country" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El country (también llamado country & western, música country o música campirana) es un género musical surgido en los años 1920 en las regiones rurales del Sur de Estados Unidos y en las Marítimas de Canadá y Australia. En sus orígenes, combinó la música folclórica de algunos países europeos de inmigrantes, principalmente Irlanda, con otras formas musicales, como el blues, el bluegrass y la música espiritual y religiosa, como el góspel. El término country comenzó a utilizarse en los años 1950, en detrimento del término hillbilly, que era como se le conocía hasta entonces, y su uso terminó de consolidarse en los años 1970.
                            </h4>
                            <br />
                            <h4>
                                El country tradicional, se tocaba esencialmente con instrumentos de cuerda, como la guitarra, el banjo, el violín sencillo (fiddle) y el contrabajo, aunque también intervenían frecuentemente el acordeón (de influencia francesa para la música cajún), y la armónica. En el country moderno se utilizan sobre todo los instrumentos electrónicos, como la guitarra eléctrica, el bajo eléctrico, los teclados, el dobro, o la steel guitar.
                            </h4>
                        </div>
                        :
                        null} 
                    {GenreData.name === "Salsa" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La salsa es un género musical bailable resultante de la síntesis del son cubano y otros géneros de música caribeña y estadounidenses como el jazz y el blues. La salsa se consolidó como un éxito comercial por músicos de origen puertorriqueño en Nueva York en la década de 1960, y por la labor de quien fue su principal armador, el dominicano Johnny Pacheco,3​ si bien sus raíces se remontan a décadas anteriores en países de la cuenca del Caribe. La salsa finalmente se extendió a lo largo de Latinoamérica, dando lugar a escenas regionales como la puertorriqueña, panameña, venezolana, cubana, dominicana, colombiana,5​ ecuatoriana y de otros países de la región. La salsa abarca varios estilos como la salsa dura, la salsa romántica y la timba.
                            </h4>
                            <br />
                            <h4>
                                La salsa presenta las siguientes características: <br/> Ritmo: Utiliza como base la clave de son, el patrón rítmico del son cubano, que puede ser 2-3 o 3-2. <br/> Melodía: En muchos casos las melodías usadas en la salsa se corresponden con las empleadas tradicionalmente en el son montuno aunque puede asimilarse también a otros géneros de la música cubana y caribeña tradicional, inclusive melodías de la música popular latinoamericana. <br/> Armonía: Se corresponde con la utilizada en la música occidental. <br /> Instrumentación: Usa instrumentos de percusión cubanos popularizados desde los años 1920 como pailas o timbales, bongó, güiro cubano, cencerro, dos maracas y conga. Arsenio Rodríguez se presentó como el primer músico en incorporar la conga o tambó a las orquestas de baile.
                            </h4>
                        </div>
                        :
                        null} 
                    {GenreData.name === "Traditional Mexicano" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                La música en México es rica en variedad de géneros, ritmos y temas. Es fruto del mestizaje entre las tradiciones europea y americana, pero tiene profundas raíces de lo prehispánico y africano que, aunque poco reconocida en otros ámbitos culturales, es en la música donde adquiere mayor relevancia. El mariachi, organización musical que identifica actualmente a México, es una forma de expresión artística que unifica a través de sus sonidos al país y a sus habitantes. Las emociones y sentimientos que se muestran en una serenata o fiesta popular, está presente en todos los eventos sociales.
                            </h4>
                            <br />
                            <h4>
                                Con el inicio de la segunda mitad del siglo XX México, gracias a las políticas de apertura hacia los prófugos de los diferentes conflictos armados internacionales o nacionales en otros países, acogió en exilio a varios compositores extranjeros que se radicaron en el país después de 1940 (véase sobre todo exilio español en México). Entre ellos figuran de manera prominente Rodolfo Halffter, de origen español, a quien se debe la formalización de la enseñanza de la música serial en el Conservatorio Nacional de Música (México), Gerhart Muench, pianista y compositor alemán que ejerció una influencia serial entre los nuevos compositores mexicanos; Julián Orbón, cubano español que enseña en el Taller de Composición que funda Carlos Chávez y Conlon Nancarrow, estadounidense nacionalizado mexicano, que recurre al piano mecánico para hacer aportes originales en relación con el tiempo en música, como sus desarrollos en la polirritmia, en la polimétrica y en la politemporalidad.
                            </h4>
                        </div>
                        :
                        null} 
                    {GenreData.name === "Tango" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El tango es un género musical y una danza, característica de la región del Río de la Plata y su zona de influencia, pero principalmente de las ciudades de Buenos Aires (en Argentina) y Montevideo (en Uruguay). El escritor Ernesto Sabato destacó la condición de "híbrido" del tango.​ El poeta Eduardo Giorlandini destaca sus raíces afrorrioplatenses, con la cultura gauchesca, española, italiana y la enorme diversidad étnica de la gran ola inmigratoria llegada principalmente de Europa.​ La investigadora Beatriz Crisorio dice que "el tango es deudor de aportes multiétnicos, gracias a nuestro pasado colonial (indígena, africano y criollo) y al sucesivo aporte inmigratorio".​ Desde entonces se ha mantenido como uno de los géneros musicales cuya presencia se ha vuelto familiar en todo el mundo, así como uno de los más conocidos.
                            </h4>
                            <br />
                            <h4>
                                Distintas investigaciones señalan seis estilos musicales principales que dejaron su impronta en el tango: el tango andaluz, la habanera cubana, el candombe, la milonga, la mazurca y la polka europea. El tango revolucionó el baile popular introduciendo una danza sensual con pareja abrazada que propone una profunda relación emocional de cada persona con su propio cuerpo y de los cuerpos de los bailarines entre sí. Refiriéndose a esa relación, Enrique Santos Discépolo, uno de sus máximos poetas, definió al tango como «un pensamiento triste que se baila».9 Musicalmente suele tener forma binaria (tema y estribillo) o ternaria (dos partes a las que se agrega un trío). Su interpretación puede llevarse a cabo mediante una amplia variedad de formaciones instrumentales, con una preponderancia clásica de la orquesta y del sexteto de dos bandoneones, dos violines, piano y contrabajo. Sin ser excluyente, el bandoneón ocupa un lugar central.
                            </h4>
                        </div>
                        :
                        null}    
                    {GenreData.name === "Chicago Blues" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El Chicago blues es un tipo de música blues que se desarrolló en Chicago, Illinois, al añadir guitarras amplificadas, batería, piano, bajo y, en algunas ocasiones, saxofón al Delta blues básico de guitarras y armónica la cual también se empezó a amplificar. Este estilo es el resultado, principalmente, de la Gran Migración Afroamericana de trabajadores pobres del sur de Estados Unidos de América a las ciudades industriales del norte del país, tales como Chicago, durante la primera mitad del siglo XX. El Chicago Blues tiene un repertorio de notas musicales más amplio que la escala estándar de blues de seis notas: generalmente se añaden notas de la escala mayor consiguiendo así un efecto "jazzero" a la vez que se mantienen las características esenciales del blues. Este efecto, el de añadir notas de otra escala, no es tan común ni tiene tanta importancia como en otros estilos, como el Texas blues, en el cual suelen utilizarse terceras y sextas mayores. Otra característica importante del Chicago blues es la presencia de una gran cantidad de acordes "novenos" dominantes, así como la presencia de notas "novenas" en las escalas.
                            </h4>
                        </div>
                        :
                        null}    
                    {GenreData.name === "Indie Rock" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El indie rock es un subgénero del rock alternativo, se originó en los Estados Unidos, Reino Unido y Nueva Zelanda en la década de 1980. De gran diversidad, presenta variados sub-géneros que incluyen al lo-fi, slowcore y entre otros. El término fue originalmente utilizado para describir sellos discográficos, pero con el tiempo se comenzó a asociar con la música que ellas producían. Luego, como las bandas de rock alternativo y post-punk estadounidenses, y luego las bandas de Britpop británicas, irrumpieron en el mercado musical de la década de 1990, pasó a ser utilizado como identificador de dichos grupos que, aunque también pertenecen de forma general al rock alternativo, no tomaron la ruta ni las estéticas impuestas por estos movimientos y que hicieron a estos populares. En la década de 2000 en tanto, como resultado de los cambios en la industria de la música y la creciente importancia de Internet, una serie de grupos de rock indie comenzaron a disfrutar de éxito comercial, dando lugar a preguntas acerca de su significado como término, pasando a ser referido como un género propiamente tal (según estadísticas).
                            </h4>
                            <br />
                            <h4>
                                El término indie es usado para referirse a un sonido nuevo presentado por un músico. Es un estilo musical del cual se desprenden el indie rock, indie pop, indietrónica, indie folk e indie hip hop. “Indie” viene del término “Independiente”, siendo así interpretado por generaciones como una actitud que adoptaron músicos al independizarse de las grandes compañías discográficas para crear música a través de sus propios medios. Pretendiendo así apoyar e incentivar a todos aquellos que se dediquen a reproducir sus creaciones en pequeños lugares. También el indie rock y sus derivados promueven el "hazlo tú mismo", "Do It Yourself" (DIY). Las influencias y estilos de los artistas han sido muy diversos, entre ellos punk, el rock psicodélico, y el rock. Los términos rock alternativo y el indie rock se utilizan indistintamente en la década de 1980, pero después de muchas bandas de música alternativa desde Nirvana en la corriente principal en la década de 1990 comenzó a utilizarse para distinguir esas bandas, que trabajan en una variedad de estilos, que no persiguen o alcanzan el éxito comercial.
                            </h4>
                        </div>
                        :
                        null}
                    {GenreData.name === "Techno/House" ? 
                        <div>
                            <h2><span>{GenreData.name}</span></h2>
                            <h4>
                                El Tech House es un subgénero de música electrónica de baile que se originó en la segunda mitad de los años 1990 y que se caracteriza por fusionar o mezclar elementos del Techno y del House. Su nombre fue acuñado por el DJ y productor británico Eddie Richards.
                            </h4>
                            <br />
                            <h4>
                                Sus características son heredadas de la fusión del House y el Techno: sonidos sintéticos, líneas de bajo robustas, beats con bombos más graves, estructura cíclica y un tempo que suele moverse en un rango de 120 a 128 BPM. Esto resulta en un sonido más simple que el House clásico y más monótono que el Techno puro.
                            </h4>
                        </div>
                        :
                        null}                                                                                                                                                                                                                                                 
                </div>
              </div>

            <div className={style.genreDetail_albums}>
            {genreDb.length ? genreDb.map((g) => 
                <Link to={"/album/" + g.apiId}>
                    <div className={style.genreDetail_album} key={g.id}>
                        <h2 style={{"fontSize": "larger"}}>{g.title}</h2>
                        <img src={g.image} alt="imagen de album" />
                    </div>
                </Link>)
                    : 
                <div className={style.mainDiv} key={null}>
                    ¡Recomiendanos tu album favorito de {GenreData.name} para mostrar!
                </div>
                }
            </div>
        </div>
    )
};