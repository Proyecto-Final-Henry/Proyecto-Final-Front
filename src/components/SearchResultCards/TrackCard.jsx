import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function HorizontalResponsiveExample(props) {
  return (
    <ListGroup horizontal>
      <ListGroup.Item>
        <img src={props.img} alt="" className="seI" />
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to={`/song/${props.id}`}>
          <p className="pp">{props.title}</p>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to={`/artist/${props.artistId}`}>
          <p>{props.artist}</p>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to={`album/${props.albumId}`}>
          <p>Album: {props.album}</p>
        </Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>{props.type}</p>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalResponsiveExample;

// import Accordion from 'react-bootstrap/Accordion';
// import style from "../../css/resultSearch.module.css";
// import { Link } from "react-router-dom";

// function AllCollapseExample(props) {
//   return (
//     <Accordion>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header className='prev'>
//             <img src={props.img} alt="img"></img>
// <p>{props.title}</p>
// <p>{props.artist}</p>
//         </Accordion.Header>
//         <Accordion.Body>
//           <div className={style.card}>
// <img src={props.img} alt="img"></img>
// <div className={style.text}>
//   <p>{props.title}</p>
//   <Link to={`/artist/${props.artistId}`}>
//     <p>{props.artist}</p>
//   </Link>
//   <p>{props.type}</p>
//   <Link to={`album/${props.albumId}`}>
//     <p>Album: {props.album}</p>
//   </Link>
//                 </div>
//               </div>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   );
// }
// export default AllCollapseExample;
