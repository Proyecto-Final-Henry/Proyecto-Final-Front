import Accordion from 'react-bootstrap/Accordion';
import style from "../../css/resultSearch.module.css";
import { Link } from "react-router-dom";

function AllCollapseExample(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='prev'>
            <img src={props.img} alt="img"></img>
            <p>{props.title}</p>
            <p>{props.artist}</p>
        </Accordion.Header>
        <Accordion.Body>
          <div className={style.card}>
                <img src={props.img} alt="img"></img>
                <div className={style.text}>
                  <p>{props.title}</p>
                  <Link to={`/artist/${props.artistId}`}>
                    <p>{props.artist}</p>
                  </Link>
                  <p>{props.type}</p>
                  <Link to={`album/${props.albumId}`}>
                    <p>Album: {props.album}</p>
                  </Link>
                </div>
              </div>   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default AllCollapseExample;

