import {Link} from "react-router-dom";
import "../css/Logo.css";

const NavBar = () => {

    return(
        <div className="logo">
            <Link to="/">
                <h1><span>Movie</span>Browser</h1>
            </Link>
        </div>
    )

}

export default NavBar;