import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { getSearch, getUserSearch } from '../../redux/actions';
import style from '../../css/filters.module.css';

export default function Filters (){
    const [state, setState]= useState({
        type:'',
        query:'',
        artist:'',
        album:'',
        explicit:'',
        select:''
    });
   
    const queryStore= useSelector(store=>store.query);
    const result= useSelector(store=>store.searchResult)
    const artist= [...(new Set(result.map(e=>e.artist)))];
    const album= [...(new Set(result.map(e=>e.album)))];

    const eventHandler = (e)=>{
        setState({...state,[e.target.name]: e.target.value, query:queryStore, select: e.target.value});
    }
    const selectHandler = (e)=>{
        setState({...state,[e.target.name]: e.target.value, query:queryStore,});
    }
    const arg ={
        artist:state.artist,
        album:state.album,
        explicit:state.explicit        
    }
    const dispatch= useDispatch();

    useEffect(()=>{
        setState({...state, artist:'', album:'', explicit:''});
        if(state.type !== 'user'){
            const arg ={
                artist:'',
                album:'',
                explicit:''        
            }
            dispatch(getSearch(state.query, state.type,null,null,arg))            
        }
                    
    },[state.type,dispatch,]);
    
    useEffect(()=>{
        if(state.type !== 'user'){
            dispatch(getSearch(state.query, state.type,null,null,arg))         
        }     
    },[state.artist,state.album,state.explicit,dispatch]);

    useEffect(()=>{
        setState({...state, select:'',  artist:'', album:'', explicit:'', type:'', query:queryStore});     
    },[queryStore])
    
    const selectors=["map"]
    const getUsers = (e)=>{
        setState({...state,[e.target.name]: e.target.value, query:queryStore, select: e.target.value, });
        dispatch(getUserSearch(queryStore))
    }

    return( 
    <div>
        {result.length || queryStore.length ? (<div className={style.box}>
            <div>
                <button className={ state.select==='track' ? style.selected : style.btn} name='type' value='track' onClick={eventHandler}>Canción</button>            
                <button className={ state.select==='artist' ? style.selected : style.btn} name='type' value='artist' onClick={eventHandler}>Artista</button>
                <button className={ state.select==='album' ? style.selected : style.btn} name='type' value='album' onClick={eventHandler}>Álbum</button>
                <button className={ state.select==='user' ? style.selected : style.btn} name='type' value='user' onClick={getUsers}>Usuario</button>
            </div>
            <div>
            <form className={style.filters}>
                {
                    selectors.map((e,i) =>{
                        if(state.type==='artist' || state.type==='user'){
                            return null
                        }else if(state.type==='album'){
                            return(
                            <div key={i}>
                                <select name='artist' value={state.artist} onChange={selectHandler}>
                                    <option>Seleccione un artista</option>
                                    {artist.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                </select>
                                <select name='explicit' value={state.explicit} onChange={selectHandler}>
                                    <option>Seleccione una opción</option>
                                    <option value={true}>explícito</option>
                                    <option value={false}>no explícito</option>                      
                                </select>
                            </div>
                            )
                        }else{
                            return(
                                <div key={i}>
                                    <select name='artist' value={state.artist} onChange={selectHandler}>
                                <div key={i} className={style.filters_select}>
                                    <select name='artist' value={state.artist} onChange={eventHandler}>
                                        <option>Seleccione un artista</option>
                                        {artist.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                    </select>
                                    <select name='album' value={state.album} onChange={selectHandler}>
                                        <option>Seleccione un album</option>
                                        {album.map((e,i)=>(<option key={i} value={e}>{e}</option>))}
                                    </select>
                                    <select name='explicit' value={state.explicit} onChange={selectHandler}>
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
        </div>) : (<h1> ¡Encuentra tus canciones favoritas! </h1>)}
    </div>
    );
};