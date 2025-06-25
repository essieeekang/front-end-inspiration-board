import { useState } from 'react';
import './App.css';
import boardData from '../data.json';
import cardData from '../cardData.json';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

const App = () => {
  const [boardList, setBoardList] = useState(boardData);
  const [cardList, setCardList] = useState(cardData);
  // const [selectedBoard, setSelectedBoard] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const addBoard = (newBoard) => {
    setBoardList(prev => [...prev, newBoard]);
  };

  const addCard = (newCard) => {
    setCardList(prev => [...prev, newCard]);
  };

  const likeCard = (id) => {
    setCardList(cardList => cardList.map(card => {
      if (card.id === id) {
        return {...card, likesCount: card.likesCount + 1};
      } else {
        return card;
      }
    }));
  };

  const handleHideForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className='app-container'>
      <header>
        <h1>Inspiration Board</h1>
      </header>

      <main className='main-content'>
        <section className='sidebar'>
          <h3>Boards</h3>
          <BoardList
            boards={boardList}
          />
          {!showForm && (
            <button onClick={handleHideForm}>Create Board</button>
          )}
          {showForm && (
            <NewBoardForm
              onBoardAdd={addBoard}
              onHide={handleHideForm}
            />
          )}
        </section>
        <section className='card-area'>
          <h1>Cards</h1>
          <CardList
            cards={cardList}
            onLikeCard = {likeCard}
          />
          <h1>Card Form</h1>
          <NewCardForm onCardAdd={addCard}></NewCardForm>
        </section>
      </main>
    </div>
  );
};

export default App;
