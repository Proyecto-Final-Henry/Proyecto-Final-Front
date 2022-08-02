
import { Link } from 'react-router-dom'


function Nav() {
    
        return (
            <div >
                <div>
                    <Link to="/">
                    <input  type="button" value="HOME"></input>
                    </Link>
                    <Link to="/premium">
                    <input  type="button" value="PREMIUM"></input>
                    </Link>
                    <Link to="/contact">
                    <input  type="button" value="CONTACT"></input>
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                    <input  type="button" value="SING IN"></input>
                    </Link>
                    <Link to="/register">
                    <input  type="button" value="SING UP"></input>
                    </Link>
                </div>
            </div>
        )
    
}

export default Nav;