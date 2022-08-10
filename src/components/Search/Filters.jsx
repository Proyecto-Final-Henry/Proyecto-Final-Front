import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { getSearch } from '../../redux/actions';



export default function Filters (){

    const [state, setState]=useState({
        type:'',
        query:''
    });

    const queryStore= useSelector(store=>store.query);

    const eventHandler = (e)=>{
        setState({...state,[e.target.name]: e.target.value, query:queryStore});
    }
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getSearch(state.query, state.type))
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