

const Card = ({id, message, likesCount, onLikeCard}) => {
  return (
    <div>
      <li className="">{`${message}`}</li>
      <button onClick={() => onLikeCard(id)}>❤️</button>
      <p>{likesCount}</p>
    </div>
  );
};

export default Card;