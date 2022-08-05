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
        history.push("/search");  
    };

    return(
      <div className='ete'>
        <input
        type="search"
        placeholder="Search"
        className="pagi"
        aria-label="Search"
        onChange={handleChange}
        />
      <Button onClick={handleSubmit}  variant="outline-success" className='pagiBo'>Search</Button>
    </div>
    );
};