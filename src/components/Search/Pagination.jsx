import { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect  } from 'react';
import { useHistory } from "react-router-dom";
import { getSearch } from '../../redux/actions';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export default function Pagination (){
    const spill = useSelector(store=>store.pagination)
    const query= useSelector(store=>store.query)
    const filter= useSelector(store=>store.filter)
    const index= useSelector(store=>store.index)

   
    const dispatch= useDispatch();

    // useEffect(()=>{
    //     dispatch(getSearch(query, filter))
    // },[state.type,dispatch])
    console.log(spill)
    console.log(query)
    console.log(filter)
    console.log(index)
    const fetchPageNumbers = () => {
        console.log("estoy entrando")
           
             
        if (spill.next) {        
          let pages = [];        
          const LeftSpill = spill.prev;        
          const RightSpill = spill.next;        
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
          console.log(pages)
          return [ ...pages];
        }
    }
       
    
      const handleMoveLeft = evt => {
        let page= index - spill.limit
        dispatch(getSearch(query, filter,page))
      }
    
      const handleMoveRight = evt => {
        let page= index + spill.limit
        dispatch(getSearch(query, filter,page))        
      }
    if ( spill.prev===undefined && spill.next===undefined) return null;  
    const pages = fetchPageNumbers();
    
    return (       
      <Fragment>
        <div>
          <form>
            {pages && pages.map((page, index) => {
              if (page === LEFT_PAGE) return (
                  <input key={index} type="button" value="<< Previous" onClick={handleMoveLeft}></input>
              );
              if (page === RIGHT_PAGE) return (
                <input key={index} type="button" value="Next >>" onClick={handleMoveRight}></input>
              ); return ""
            }) }
          </form>
        </div>
      </Fragment>
    );
}