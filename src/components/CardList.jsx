import Card from "./Card";


const CardList = props => {
  const getCardList = props.cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likesCount={card.likesCount}
        onLikeCard = {props.onLikeCard}
      />
    );
  });
  return <ul className="">{getCardList}</ul>;
};


export default CardList;