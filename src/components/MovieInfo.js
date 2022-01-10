import '../css/MovieInfo.css';
import playMovie from '../assets/img/playMovie.png';
import runtime from '../assets/img/runtime.png';
import star from '../assets/img/movieStar.png';
import useDateFormatter from '../hooks/useDateFormatter'
// video={result.video}

const MovieInfo = (props) => {
    const {toDate} = useDateFormatter();
    const divStyle = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w1280' + props.image + ')',
    }
    const genre = props.genres.map((elem) =>
        <div key={elem.id} className="genreCard">
            {elem.name === "Science Fiction" ? "Sci-Fi" :
                elem.name === "Documentary" ? "Docu" : elem.name}
        </div>
    )
    return (
        <div id="MovieInfo">
            <div style={divStyle} className="banner">
                <div className="playMovie">
                    <img src={playMovie} alt="play"/>
                </div>

                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/-0bYWnP3jH4?controls=0"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen> </iframe>*/}

                {/*<iframe id="ytplayer" type="text/html" width="720" height="405"*/}
                {/*        src="https://www.youtube.com/embed/-0bYWnP3jH4?autoplay=1&cc_load_policy=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3"*/}
                {/*        frameBorder="0" allowFullScreen> </iframe>*/}
            </div>
            <div className="title">
                {props.title}
            </div>
            <div className="underTitle">
                <img src={runtime} alt="runtime"/> {props.runtime} minutes &nbsp;&nbsp;&nbsp;&nbsp;
                <img src={star} alt="runtime"/> {props.vote} (iMDb)
            </div>

            <div className="separator">
                <div className="hr"> </div>
            </div>

            <div className="part2">
                <div className="containerRelease">
                    <div className="release">
                        Release date
                    </div>
                    <div className="releaseDate">
                        {toDate(props.release)}
                    </div>
                </div>
                <div className="containerGenre">
                    <div className="genre">
                        Genre
                    </div>
                    <div className="genreList">
                        {genre}
                    </div>
                </div>
            </div>

            <div className="separator">
                <div className="hr"> </div>
            </div>

            <div className="synopsis">
                Synopsis
            </div>

            <div className="overview">
                {props.overview}
            </div>

        </div>
    );
}

export default MovieInfo;