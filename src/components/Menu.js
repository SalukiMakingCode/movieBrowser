import '../css/Menu.css';
import home from '../assets/img/home.png';
import homeActive from '../assets/img/homeActive.png';
import search from '../assets/img/search.png';
import searchActive from '../assets/img/searchActive.png';
import profil from '../assets/img/profil.png';
import profilActive from '../assets/img/profilActive.png';
import {Link, useLocation} from "react-router-dom";

const Menu = () => {
    const href = useLocation();
    return (
        <footer>
            <div id="containerMenu">
                <Link to={'/'}><img src={href.pathname==="/" ? homeActive : home} alt="homepage" id="homepage"/></Link>
                <Link to={'/search'}><img src={href.pathname==="/search" ? searchActive : search} alt="search" id="search"/></Link>
                <Link to={'/profil'}><img src={href.pathname==="/profil" ? profilActive : profil} alt="profil" id="profil"/></Link>
            </div>
        </footer>
    );
}

export default Menu;