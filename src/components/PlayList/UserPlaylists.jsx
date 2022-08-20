import axios from "axios";
import {useSelector } from "react-redux";
import PlaylistCard from "./PlaylistCard";

export default function  UserPlaylist({isModal, id, name}){
    const playList = useSelector(store=> store.playList); 
    
    const  addSong = async (e) => {
        try {
          await axios.put(`/api/back-end/playlist/addSongs/${e.target.name}`, {              
            name: name,
            id: id,
          });
        } catch (err) {
          throw new Error("No pudimos agregar tu canción");
        }
    } ; 
    
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
                            name={e.name}
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