import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function Feed(){
    const history = useHistory()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token")
            if(!token){
                history.push("/login")
                return
            }
        };
         autenticarUsuario();
    },[])

    return(
        <div>
            <br />
            <img src="https://viapais.com.ar/resizer/XH4OAJCYd2SWrQArvlIU84i9ERU=/982x551/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/7XKUVIER6JFZDGODBA42HUFTBQ.jpg" alt="aca va el feed" />
        </div>
    )
}