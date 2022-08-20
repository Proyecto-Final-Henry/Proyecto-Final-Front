export default function  PlaylistCard({isModal, name, addSong,id}){
    return(
        <div>
            {/* aqui se dbe colocar un link a la playlist se debe hacer la ruta con id de la lista y renderizar el componente PlaylistComponent */}
            <h5>{name}</h5> 
            {isModal? (<button name={id} onClick={addSong}>añadir</button>): null} 
        </div>
    )
}