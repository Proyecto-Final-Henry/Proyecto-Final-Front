import {useDispatch} from 'react-redux';
import { useState,  } from 'react';
import { useHistory } from "react-router-dom";
import { getSearch } from '../../redux/actions';



export default function SearchBar (){
    const [toFind, setToFind]= useState("");
    const dispatch= useDispatch();
    
    const history = useHistory();


    function handleChange(event) {
        setToFind(event.target.value);
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        dispatch(getSearch(toFind))
        history.push("/search")       
    }


    return(
        
        <div>
            <form  onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="name"
              value={toFind}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
            
        </div>
    )

}