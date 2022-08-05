export default function AlbumCard (props){
    
    return(
        <div>
            <img src={props.img} alt="img"></img>
            <p>{props.title}</p>
            <p>{props.type}</p> 
                       
        </div>
    )

}