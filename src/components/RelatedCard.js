import '../css/RelatedCard.css';
import useDateFormatter from "../hooks/useDateFormatter";
import notFound from "../assets/img/relatedNotFound.png";

const RelatedCard = (props) => {
    const {getYear} = useDateFormatter();
    let image = "https://image.tmdb.org/t/p/w1280" + props.image;
    return (
        <div className="relatedCard">
            <img src={props.image !== null ? image : notFound} alt={props.title} className="relatedImage" />
            {props.title} ({getYear(props.release)})
        </div>
    );
}

export default RelatedCard;