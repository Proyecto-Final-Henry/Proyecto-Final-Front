import {useDispatch} from 'react-redux';
import { useState,  } from 'react';
import { useHistory } from "react-router-dom";
import { getSearch } from '../../redux/actions';
import Button from 'react-bootstrap/Button';

export default function SearchBar (){
    const [toFind, setToFind]= useState("");
    const dispatch= useDispatch();
    const history = useHistory();

    function handleChange(event) {
        setToFind(event.target.value);
    };

    const handleSubmit=(event) =>{
        event.preventDefault();
        dispatch(getSearch(toFind));
        if(toFind.length){
          history.push("/search");  
        } else {
          alert("Por favor inserte una canción")
        };
    };

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
      <Button onClick={handleSubmit}  variant="outline-success" className='pagiBo'>Buscar</Button>
    </div>
    );
};