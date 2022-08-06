import Accordion from 'react-bootstrap/Accordion';
import style from "../../css/resultSearch.module.css";

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
                <p>{props.artist}</p>
                <p>{props.type}</p>
                </div>                       
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;

// import style from "../../css/resultSearch.module.css";
// export default function TrackCard (props){
    
//     return(
        // <div className={style.card}>
        //     <img src={props.img} alt="img"></img>
        //     <div className={style.text}>
        //     <p>{props.title}</p>
        //     <p>{props.artist}</p>
        //     <p>{props.type}</p>
        //     </div>                       
        // </div>
//     );
// };