import axios from "axios";
import { getPlaylist } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../css/songs.module.css";

export default function CreatePlaylist({onClose,userId}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const playListUser = useSelector(store=> store.playList); 

  const [playlist, setPlaylist] = useState({
    name: "",
  });
  
  const [error, setError] = useState({
    name: "",
  });

  function validateInput (input){
    let error = {}
    if(input.name.length === 0){
      error.name = '* Nombre de Playlist es requerido';
    }
    if(playListUser.find(p => p.name === input.name)){
      error.name = "* No puedes repetir nombres de Playlist"
    }
      return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.entries(error).length === 0){
      try {
        await axios.post("/api/back-end/playlist/create", {              
          name: playlist.name,
          userId: userId,
        });
      } catch (err) {
        throw new Error("No pudimos crear tu playlist");
      };
      if(onClose){
        e.target.reset()
        dispatch(getPlaylist(userId))
        onClose();
      } else {
        dispatch(getPlaylist(userId))
      }
    };
  };
  
  const handleChange = (e) => {
    setPlaylist({
      [e.target.name]: e.target.value
    });
    setError(
      validateInput({[e.target.name]:e.target.value})
    );
  };

  return (
    <div className={style.createReview}>
      <h3>Crear Playlist</h3>
      <form onSubmit={handleSubmit} id="formulario">      
        <input
          id="reviewTitle"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <p className={style.danger}>{error.name}</p>
        <input type="submit" value="Crear Playlist" className={style.btn_createReview}/>
      </form>
    </div>
  )
}