

const Card = ({id, message, likes, onLikeCard, onDeleteCard}) => {
  return (
    <div>
      <li className="">{`${message}`}</li>
      <button onClick={() => onLikeCard(id)}>❤️</button>
      <p>{likes}</p>
      <button onClick={() => onDeleteCard(id)}>🗑️</button>
    </div>
  );
};

export default Card;