import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { getSearch } from '../../redux/actions';
import Button from 'react-bootstrap/Button';
import style from '../../css/filters.module.css';

export default function Filters (){
    const [state, setState]= useState({
        type:'',
        query:'',
        artist:'',
        album:'',
        explicit:''
    });
    const queryStore= useSelector(store=>store.query);
    const checkSearch= useSelector(store=>store.searchResult);
    const result= useSelector(store=>store.searchResult)
    const artist= [...(new Set(result.map(e=>e.artist)))];
    const album= [...(new Set(result.map(e=>e.album)))];

    const eventHandler = (e)=>{
        setState({...state,[e.target.name]: e.target.value, query:queryStore});
    }
    const resetSelect = ()=>{
        setState({...state, artist:'', album:'', explicit:''});
    }
    const arg ={
        artist:state.artist,
        album:state.album,
        explicit:state.explicit        
    }
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getSearch(state.query, state.type,null,null,arg))
        resetSelect()
    },[state.type,dispatch]);
    
    useEffect(()=>{
        dispatch(getSearch(state.query, state.type, null,null,arg))      
    },[state.artist,state.album,state.explicit,dispatch]);
    
    const selectors=["map"]

    return( 
    <div>
        {checkSearch.length ? <div className={style.box}>
            <div>            
            <Button className={style.btn} variant="outline-success" name='type' value='artist' onClick={eventHandler}>Artista</Button>
            <Button className={style.btn} variant="outline-success" name='type' value='album' onClick={eventHandler}>Álbum</Button>
            <Button className={style.btn} variant="outline-success" name='type' value='track' onClick={eventHandler}>Canción</Button>
            </div>
            <div>
            <form className={style.filters}>
                {
                    selectors.map(e=>{
                        if(state.type==='artist'){
                            return null
                        }else if(state.type==='album'){
                            return(
                            <div>
                                <select name='artist' value={state.artist} onChange={eventHandler}>
                                    <option>Seleccione un artista</option>
                                    {artist.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                </select>
                                <select name='explicit' value={state.explicit} onChange={eventHandler}>
                                    <option>Seleccione una opción</option>
                                    <option value={true}>explícito</option>
                                    <option value={false}>no explícito</option>                      
                                </select>
                            </div>
                            )
                        }else{
                            return(
                                <div>
                                    <select name='artist' value={state.artist} onChange={eventHandler}>
                                        <option>Seleccione un artista</option>
                                        {artist.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                    </select>
                                    <select name='album' value={state.album} onChange={eventHandler}>
                                        <option>Seleccione un album</option>
                                        {album.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                    </select>
                                    <select name='explicit' value={state.explicit} onChange={eventHandler}>
                                        <option>Seleccione una opción</option>
                                        <option value={true}>explícito</option>
                                        <option value={false}>no explícito</option>                      
                                    </select>
                                </div>
                                )
                        }
                    })
                }                  
            </form>
            </div>
        </div> : <h1> ¡Encuentra tus canciones favoritas! </h1>}
    </div>
    );
};