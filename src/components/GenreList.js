import '../css/GenreList.css';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import GenreListCard from "./GenreListCard";

const GenreList = () => {
    let params = useParams();
    let idGenre = parseInt(params.genreId, 10);
    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect( () => {
        let componentMounted = true;
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=b177f17184ae41c95021d0c7544927cf&with_genres=' + idGenre)
            .then(response => response.json())
            .then(jsonMovie => {
                if(componentMounted) {
                    setResult(jsonMovie.results);
                    setLoad(true);
                }
            })
            .catch(err => {
                setError(err.message);
                setLoad(true)
            })
        return () => {
            componentMounted = false;
        }
    }, [idGenre]);

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

export default GenreList;