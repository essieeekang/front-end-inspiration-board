import './Card.css';
// import PropTypes from 'prop-types';


const Card = ({id, message, likes, onLikeCard, onDeleteCard}) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const colors = [
      ' #db96b9', // Rose Quartz
      'e4a8b9', // Pink Champagne
      '#c8a8d5', // Light Coral
      '#d2ccf2', // Peach Puff
      '#f2d2cc', // Light Salmon
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className='card-item'
      style ={{ backgroundColor: getRandomColor() }}>

      <li className="card-message">{`${message}`}</li>
      <div className='button-area'>
        <p>{likes}</p>
        <button onClick={() => onLikeCard(id)}>❤️</button>
        <button onClick={() => onDeleteCard(id)}>🗑️</button>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   onLikeCard: PropTypes.func.isRequired,
//   onDeleteCard: PropTypes.func.isRequired,
// };

export default Card;