import Nav from "../Nav/Nav"
import { Link } from "react-router-dom"

function Home() {
    return (
      <div>
        <Nav/>
        <div>
            <p>si quieres conocer las listas del momento, recomendar listas de reproducción, ver las canciones más nuevas y calificar canciones con Spotify. Inicia ya con MyApp</p>
            <form>
            <Link to="/login">
                 <input type="button" value="INICIAR"></input>
            </Link>
            </form>            
        </div>

      </div>
    );
  }

export default Home;