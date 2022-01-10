import '../css/GenreListCard.css';
import useDateFormatter from "../hooks/useDateFormatter";

const GenreListCard = (props) => {
    const {getYear} = useDateFormatter();
    let img="https://image.tmdb.org/t/p/w400" + props.poster;
    return (
        <div className="GenreListCard">
            <img src={img} alt={props.title} className="imgCard"/>
            {props.title} <span className="year">({getYear(props.release)})</span>
        </div>
    );
}

export default GenreListCard;