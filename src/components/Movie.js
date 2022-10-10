import '../css/Movie.css';
import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import MovieInfo from "./MovieInfo";
import RelatedCard from "./RelatedCard";
import NavBar from "./NavBar";
import Menu from "./Menu";

const Movie = () => {
    let params = useParams();
    let id = parseInt(params.idMovie, 10);
    const [result, setResult] = useState(null);
    const [related, setRelated] = useState([])
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect( () => {
        let componentMounted = true;
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=b177f17184ae41c95021d0c7544927cf')
            .then(response => response.json())
            .then(jsonMovie => {
                if(componentMounted) {
                    setResult(jsonMovie);
                }
            })
            .then(
                fetch('https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=b177f17184ae41c95021d0c7544927cf&page=1')
                    .then(response => response.json())
                    .then(jsonMovie => {
                        if(componentMounted) {
                            setRelated(jsonMovie.results);
                        }
                    })
                    .then ( () => {
                        setLoad(true);
                        }
                    )
                    .catch(err => {
                        if(componentMounted) {
                            setError(err.message);
                            setLoad(true)
                        }
                    })
            )
            .catch(err => {
                if(componentMounted) {
                    setError(err.message);
                    setLoad(true)
                }
            })
        return () => {
            componentMounted = false;
        }
    }, [id]);

    {
        if (load && result) return (
            <div>
                <NavBar />
                {error ? <div>{error.message}</div> :
                    <div>
                        <MovieInfo
                            image={result.poster_path}
                            genres={result.genres}
                            title={result.title}
                            overview={result.overview}
                            release={result.release_date}
                            vote={result.vote_average}
                            video={result.video}
                            runtime={result.runtime}
                        />
                    </div>
                }

                <div className="related">
                    Related Movies
                </div>

                <div className="relatedList">
                    {error ? <div>{error.message}</div> :
                        related.map((elem) =>
                            <Link to={`/movie/${elem.id}`} key={elem.id}>
                                <RelatedCard title={elem.title} image={elem.backdrop_path} release={elem.release_date}/>
                            </Link>
                        )
                    }
                </div>

                <Menu />

            </div>
        );
        else  return (
            <div>Loading ....</div>
        )
    }
}

export default Movie;