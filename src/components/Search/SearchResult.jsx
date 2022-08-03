import { useSelector } from "react-redux"
export default function SearchResult (){
    const data = useSelector(store => store.searchResult)


    return(
        <div>
            <p> en la consola veras el resultado de la data</p>
            {console.log(data)}            
        </div>
    )

}