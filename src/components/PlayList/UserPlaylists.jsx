import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../redux/actions";
import PlaylistCard from "./PlaylistCard";

export default function  UserPlaylist({isModal, id, name, closeModal, userId}){
    const playList = useSelector(store=> store.playList); 

    let dispatch = useDispatch()



    const  addSong = async (e) => {
        try {
          await axios.put(`/api/back-end/playlist/addSongs/${e.target.name}`, {              
            name: name,
            id: id,
          });
          closeModal()
          dispatch(getPlaylist(userId))
        } catch (err) {
          throw new Error("No pudimos agregar tu canción");
        }
    }; 

    const removeSong = async (e) => {
        try {
            await axios.put(`/api/back-end/playlist/removeSongs/${e.target.name}`, {              
              name: name,
              id: id,
            });
            closeModal()
          dispatch(getPlaylist(userId))
          } catch (err) {
            throw new Error("No pudimos remover tu canción");
          }
    }

    return(
        <div>{playList.length? (
            <div>
                {playList.map((e,i)=>{
                    return (
                        <div key={i}>
                            <PlaylistCard
                            isModal={isModal? true : false}
                            id={e.id}
                            addSong={addSong}
                            removeSong={removeSong}
                            name={e.name}
                            songId={id}
                            playlist={e}
                            />                           
                        </div>
                    )
                })}
            </div>): (
            <div>
                <h5>No tienes listas de reproduccion, crea una</h5>
            </div>)}
        </div>
    )
}