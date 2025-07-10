import './Card.css';
import PropTypes from 'prop-types';


const Card = ({id, message, likes, color, image, onLikeCard, onDeleteCard}) => {
  return (
    <div className='card-item'
      style ={{ backgroundColor: color }}>
      <div className='image-container'>
        <img src={image}/>
      </div>
      <li className="card-message">{`${message}`}</li>
      <button id="like" onClick={() => onLikeCard(id)}>❤️</button>
      <p id="likes-message">{likes} likes</p>
      <button id="delete" onClick={() => onDeleteCard(id)}>🗑️</button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onLikeCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Card;