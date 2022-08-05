import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
//import { useHistory } from "react-router-dom";
import { getSearch } from '../../redux/actions';



export default function Filters (){

    const [state, setState]=useState({
        type:''
    });

    const query= useSelector(store=>store.query)

    const eventHandler = (e)=>{
        setState({...state,[e.target.name]: e.target.value});
    }
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getSearch(query, state.type))
    },[state.type,dispatch]);


    return(
        <div>
            <form>
                    <select name='type' defaultValue={1} onChange={eventHandler}>
                        <option disabled value={1}>Seleccione un filtro</option>
                        <option value={'artist'}>Artist</option>
                        <option value={'album'}>Album</option>
                        <option value={'track'}>Track</option>                        
                    </select>
                </form>
        </div>
    )
};