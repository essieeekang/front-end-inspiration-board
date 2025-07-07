import './Card.css';

const Card = ({id, message, likes, onLikeCard, onDeleteCard}) => {
  return (
    <div className='card-item'>
      <li className="card-message">{`${message}`}</li>
      <button id="like" onClick={() => onLikeCard(id)}>❤️</button>
      <p id="likes-message">{likes} likes</p>
      <button id="delete" onClick={() => onDeleteCard(id)}>🗑️</button>
    </div>
  );
};

export default Card;