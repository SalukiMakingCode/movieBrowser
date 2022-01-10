import '../css/MovieSpotlight.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import play from '../assets/img/play.png';

const MovieSpotlight = () => {
    const [title, setTitle] = useState('');
    const [movieImage, setMovieImage] = useState('');
    const [idMovie, setIdMovie] = useState('');

    fetch('https://api.themoviedb.org/3/movie/333339?api_key=b177f17184ae41c95021d0c7544927cf', {cache: "reload"})
        .then(response => response.json())
        .then(jsonMovie => {
            setTitle(jsonMovie.original_title);
            setMovieImage("https://image.tmdb.org/t/p/w1280" + jsonMovie.backdrop_path);
            setIdMovie(jsonMovie.id);
        })
        .catch(err => console.log(err))

    const divStyle = {
        backgroundImage: 'url(' + movieImage + ')',
    }

    const linkStyle = {
        textDecoration:"none"
    }

    return (
      <Link to={`/movie/${idMovie}`} style={linkStyle}>
        <div className="spotlight">
            <div className="caption" style={divStyle}>
                <div className="spotlightInfo">
                    <div className="spotlightBouton">
                        <img src={play} alt="play" />
                    </div>
                    <div className="containerSpotlightTitle">
                        <div className="spotlightTitle">
                            Movie Spotlight
                        </div>
                        <div className="SpotlightMovieTitle">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Link>
    );
}

export default MovieSpotlight;