import Card from './Card';
import './CardList.css';
import PropTypes from 'prop-types';

const CardList = props => {
  const getCardList = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        color={card.color}
        onLikeCard = {props.onLikeCard}
        onDeleteCard = {props.onDeleteCard}
      />
    );
  });
  return <div className='card-list'>{getCardList}</div>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
  onLikeCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default CardList;