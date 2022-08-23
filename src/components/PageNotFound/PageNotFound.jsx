import React from 'react';
import styles from  '../../css/pageNotFound.module.css';
import img404 from '../../img/logo_remusic.png'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className={styles.pageNotFound}>
            <div>
                <h3>404</h3>
                <img src={img404} alt="img404" className={styles.img404}/>
                <h2>No pudimos encontrar esta página</h2>
                <p>Prueba volviendo atrás e intenta de nuevo.</p>
                <Link to='/feed'><button className={styles.btn_return}>Volver al inicio</button></Link>
            </div>
        </div>
    );
}

export default PageNotFound;