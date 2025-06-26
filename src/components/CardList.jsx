import Card from './Card';


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
  return <ul className="">{getCardList}</ul>;
};


export default CardList;