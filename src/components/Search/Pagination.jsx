import { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from 'react-bootstrap/Button';
import style from '../../css/pagination.module.css'

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export default function Pagination ({pagination,query,filter,index,onMove}){
    // const pagination = useSelector(store=>store.pagination)
    // const query= useSelector(store=>store.query)
    // const filter= useSelector(store=>store.filter)
    // const index= useSelector(store=>store.index)
   

   
    const dispatch= useDispatch();

    
    const fetchPageNumbers = () => {
          let pages = [];        
          const LeftSpill = pagination.prev;        
          const RightSpill = pagination.next;        
          switch (true) {

            case (LeftSpill && RightSpill): {          
                pages = [LEFT_PAGE,RIGHT_PAGE];
                break;
              }  
            
            case (LeftSpill): {          
              pages = [LEFT_PAGE];
              break;
            }  
            
            case (RightSpill): {
              pages = [RIGHT_PAGE];
              break;
            }
            
            default:{
              pages = [];
              break;
            }
          }
          return [ ...pages];
    };
       
      const handleMoveLeft = evt => {
        let page= index - pagination.limit
        dispatch(onMove(query, filter,page))
      };
    
      const handleMoveRight = evt => {
        let page= index + pagination.limit
        dispatch(onMove(query, filter,page))        
      };

    const pages = fetchPageNumbers();
    const view=[]
    if(pagination.total>0){
      let al;
      if(pagination.next===undefined){
        al= pagination.total
      }else{
        al=index + pagination.limit
      }  
      view.push(`mostrando del ${index + 1} al ${al}`)          
    }
    
    
    return (       
      <Fragment>
        <div className={style.box}>
          <div>
            <h5>{pagination.total} Resultados</h5>
            {view && view.map(e=>{
              return(
                <span><h6>{e}</h6></span>
              )
            })}
          </div>
          <div>
            {pages && pages.map((page, index) => {
              if (page === LEFT_PAGE) return (
                <Button key={index} className={style.btn} variant="outline-success" onClick={handleMoveLeft}>&lt;&lt;Anterior</Button>
              );
              if (page === RIGHT_PAGE) return (
                <Button key={index} className={style.btn} variant="outline-success"  onClick={handleMoveRight}>Siguiente&gt;&gt;</Button>
              ); return ""
            }) }
          </div>
          
        </div>
      </Fragment>
    );
};