import './Card.css';


const Card = ({id, message, likes, onLikeCard, onDeleteCard}) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const colors = [
      '#B793C8', // Mauve Mist
      '#C08081', // Old Rose
      '#DEA5A4', // Blossom Pink
      '#D8BFD8', // Thistle
      '#C4A3BF', // Lilac Grey
      '#A186BE', // Wisteria
      '#F5CBA7', // Apricot Cream
      '#F4A7B9', // Peach Blush
      '#A77CA0', // Dusty Plum
      '#ECD9A7', // Soft Gold
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

export default Card;