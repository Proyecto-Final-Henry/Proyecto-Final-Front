import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { getSearch } from '../../redux/actions';
import Button from 'react-bootstrap/Button';
import style from '../../css/filters.module.css'



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
        <div className={style.box}>            
            <Button className={style.btn} variant="outline-success" name='type' value='artist' onClick={eventHandler}>Artista</Button>
            <Button className={style.btn} variant="outline-success" name='type' value='album' onClick={eventHandler}>Álbum</Button>
            <Button className={style.btn} variant="outline-success" name='type' value='track' onClick={eventHandler}>Canción</Button>
        </div>
    )
};