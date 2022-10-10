import '../css/Trending.css';
import React, {useState, useEffect} from "react";
import TrendingCard from "./TrendingCard";
import {Link} from "react-router-dom";

const Trending = () => {
    const [result, setResult] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

useEffect( () => {
    let componentMounted = true;
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b177f17184ae41c95021d0c7544927cf')
        .then(response => response.json())
        .then(jsonMovie => {
            if(componentMounted) {
                setResult(jsonMovie.results);
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

    if (load) return (
        <div className="trendingDisplay">
            {error ? <div>{error.message}</div> : result.map((elem) =>
                <Link to={`/movie/${elem.id}`} key={elem.id} >
                  <TrendingCard id={elem.id} title={elem.title} vote={elem.vote_average} poster={elem.poster_path}/>
                </Link>
            )}
        </div>
    );
    else return (
        <div>Loading ....</div>
    )
}

export default Trending;