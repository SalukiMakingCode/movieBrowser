import '../css/RelatedCard.css';
import useDateFormatter from "../hooks/useDateFormatter";

const RelatedCard = (props) => {
    const {getYear} = useDateFormatter();
    let image = "https://image.tmdb.org/t/p/w1280" + props.image;
    return (
        <div className="relatedCard">
            <img src={image} alt={props.title} className="relatedImage" />
            {props.title} ({getYear(props.release)})
        </div>
    );
}

export default RelatedCard;