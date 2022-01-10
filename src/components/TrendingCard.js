import '../css/TrendingCard.css';
import star from '../assets/img/star.png';

const TrendingCard = (props) => {
    const divStyle = {
        backgroundImage: 'url(https://image.tmdb.org/t/p/w400' + props.poster + ')',
    }
    return (
        <div className="trendingCard" style={divStyle}>
            <div className="imdb">
            iMDb
            <img src={star} alt="star"/>
            {props.vote}
            </div>

            <div className="trendingCardTitle">
            {props.title}
            </div>
        </div>
    );
}

export default TrendingCard;