import Card from './Card';
import './CardList.css';


const CardList = props => {
  const getCardList = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        onLikeCard = {props.onLikeCard}
        onDeleteCard = {props.onDeleteCard}
      />
    );
  });
  return <div className='card-list'>{getCardList}</div>;
};

export default CardList;