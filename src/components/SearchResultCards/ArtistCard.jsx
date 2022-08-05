export default function ArtistCard (props){
    
    return(
        <div>
            <img src={props.img} alt="img"></img>
            <p>{props.title}</p>
            <p>{props.type}</p>                       
        </div>
    )

}