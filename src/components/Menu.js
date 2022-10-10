import '../css/Menu.css';
import home from '../assets/img/home.png';
import homeActive from '../assets/img/homeActive.png';
import search from '../assets/img/search.png';
import searchActive from '../assets/img/searchActive.png';
import {Link, useLocation} from "react-router-dom";

const Menu = () => {
    const href = useLocation();
    return (
        <footer>
            <div id="containerMenu">
                <Link to={'/'}><img src={href.pathname==="/" ? homeActive : home} alt="homepage" id="homepage"/></Link>
                <Link to={'/search/28'}><img src={href.pathname.substring(0, 7)==="/search" ? searchActive : search} alt="search" id="search"/></Link>
            </div>
        </footer>
    );
}

export default Menu;