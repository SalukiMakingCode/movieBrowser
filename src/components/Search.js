import '../css/Search.css';
import Menu from "./Menu";
import searchForm from '../assets/img/searchForm.png'
import {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useSearchParams} from "react-router-dom";
import SearchMovie from "./SearchMovie";
import NavBar from "./NavBar";

const Search = () => {
    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    let [searchParams, setSearchParams] = useSearchParams("");

    useEffect( () => {
        let componentMounted = true;
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b177f17184ae41c95021d0c7544927cf')
            .then(response => response.json())
            .then(jsonMovie => {
                if(componentMounted) {
                    setResult(jsonMovie.genres);
                    setLoad(true);
                }
            })
            .catch(err => {
                if(componentMounted) {
                    setError(err.message);
                    setLoad(true)
                }
            })
        return () => {
            componentMounted = false;
        }
    }, []);


    if (load && searchParams=="")
    return (
        <div className="Search">
            <NavBar />

            <div className="searchForm">
                <img src={searchForm} alt="search a movie" />
                <input           value={searchParams.get("filter") || ""}
                                 onChange={event => {
                                     let filter = event.target.value;
                                     if (filter) {
                                         setSearchParams({ filter });
                                     } else {
                                         setSearchParams({});
                                     }
                                 }}
                                 type="text" id="searchFormInput" placeholder="Sherlock Holmes" />
            </div>

            <div className="genreMenu">
                {error ? <div>{error.message}</div> : result.map((elem) =>
                    <NavLink
                        style={({isActive}) => ({
                            color: isActive ? "#FF8F71" : ""
                        })}
                        to={`/search/${elem.id}`}
                        key={elem.id}
                        className="navGenreMenu"
                    >
                        {elem.name}&nbsp;
                    </NavLink>
                )}
            </div>

            <Outlet/>


            <Menu />
        </div>
    );

    else if (searchParams!="") {
        return (
            <div className="Search">
                <NavBar />

                <div className="searchForm">
                    <img src={searchForm} alt="search a movie" />
                    <input           value={searchParams.get("filter") || ""}
                                     onChange={event => {
                                         let filter = event.target.value;
                                         if (filter) {
                                             setSearchParams({ filter });
                                         } else {
                                             setSearchParams({});
                                         }
                                     }}
                                     type="text" id="searchFormInput" placeholder="Sherlock Holmes" />
                </div>

                <SearchMovie search={searchParams}/>

                <Menu />
            </div>
        );
    }

    else return (
        <div className="Search">
            <NavBar />
            Loading ....
        </div>
    );
}

export default Search;