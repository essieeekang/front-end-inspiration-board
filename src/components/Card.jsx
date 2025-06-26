import './Card.css';

const Card = ({id, message, likes, onLikeCard, onDeleteCard}) => {
  return (
    <div className='card-item'>
      <li className="card-message">{`${message}`}</li>
      <div className='button-area'>
        <p>{likes}</p>
        <button onClick={() => onLikeCard(id)}>❤️</button>
        <button onClick={() => onDeleteCard(id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Card;