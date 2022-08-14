import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../../css/searchbar.module.css'

export default function SearchBar ({onSearch,id}){
    const [toFind, setToFind]= useState("");
    const dispatch= useDispatch();
   
    function handleChange(event) {
        setToFind(event.target.value);
    };
    const obj={artist:'', album:'', explicit:''}
    
    useEffect(()=>{
      dispatch(onSearch(toFind.trim(),null,null,id, obj))      
    },[toFind]);

    return(
      <div className='ete'>
        <div className={style.search}>
          <input
          style={{"margin": "10px"}}
          type="search"
          placeholder="Búsqueda"
          className= {style.search__input}
          aria-label="Search"
          onChange={handleChange}
          />
        </div>
    </div>
    );
};