import { useState } from 'react';
import './App.css';
import boardData from '../data.json';
import cardData from '../cardData.json';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';


function App() {
  const [boardList, setBoardList] = useState(boardData);
  const [cardList, setCardList] = useState(cardData);

  const addBoard = (newBoard) => {
    setBoardList(prev => [...prev, newBoard]);
  };

  const addCard = (newCard) => {
    setCardList(prev => [...prev, newCard]);
  };

  const likeCard = (id) => {
    setCardList(cardList => cardList.map(card => {
      if (card.id === id) {
        return {...card, likesCount: card.likesCount + 1}
      } else {
        return card;
      }
    }));
  };

  return (
    <>
      <h1>Board Form</h1>
      <NewBoardForm onBoardAdd={addBoard}></NewBoardForm>
      <h1>Boards</h1>
      <BoardList
        boards={boardList}
      />
      <h1>Cards</h1>
      <CardList
        cards={cardList}
        onLikeCard = {likeCard}
      />
      <h1>Card Form</h1>
      <NewCardForm onCardAdd={addCard}></NewCardForm>
    </>
  );
};

export default App;
