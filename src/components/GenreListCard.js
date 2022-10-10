import '../css/GenreListCard.css';
import useDateFormatter from "../hooks/useDateFormatter";
import movieNotFound from "../assets/img/movieNotFound.png"


const GenreListCard = (props) => {
    const {getYear} = useDateFormatter();
    let img="https://image.tmdb.org/t/p/w400" + props.poster;
    return (
        <div className="GenreListCard">
            {props.poster !== null ?
                <img src={img} alt={props.title} className="imgCard"/>:
                <img src={movieNotFound} alt={props.title} className="imgCard" />
            }
            <span className="hoverTitle">{props.title}</span> <span className="year">({getYear(props.release)})</span>
        </div>
    );
}

export default GenreListCard;