import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {getSearch} from '../../redux/actions';
import { useEffect } from 'react';

export default function SearchBar (){
    const [toFind, setToFind]= useState("");
    const dispatch= useDispatch();
   
    function handleChange(event) {
        setToFind(event.target.value);               
    };

    useEffect(()=>{
      dispatch(getSearch(toFind))      
    },[toFind]);

    
    return(
      <div className='ete'>
        <input
        style={{margin: "10px"}}
        type="search"
        placeholder="Busqueda"
        className="pagi"
        aria-label="Search"
        onChange={handleChange}
        />
    </div>
    );
};