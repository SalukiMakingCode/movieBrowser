import '../css/SearchMovie.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import GenreListCard from "./GenreListCard";

const SearchMovie = (props) => {
    let search = props.search.toString().substring(7);

    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=b177f17184ae41c95021d0c7544927cf&query=' + search)
            .then(response => response.json())
            .then(jsonMovie => {
                setResult(jsonMovie.results);
                setLoad(true);
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
    }, [search]);

    if (load) return (
        <div className="genreListDisplay">
            {error ? <div>{error.message}</div> : result.map((elem) =>
                <Link to={`/movie/${elem.id}`} key={elem.id} >
                    <GenreListCard id={elem.id} title={elem.title} release={elem.release_date} poster={elem.poster_path}/>
                </Link>
            )}
        </div>
    );
    else return (
        <div>Loading ....</div>
    )
}

export default SearchMovie;