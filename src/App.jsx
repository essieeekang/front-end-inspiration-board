import { useState, useEffect } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';
import { getAllBoardsApi, createNewBoardApi, getAllCardsApi, createNewCardApi, likeCardApi, removeCardApi } from './api'; 

const App = () => {
  const [boardList, setBoardList] = useState([]);
  const [cardList, setCardList] = useState([]);
  // const [selectedBoard, setSelectedBoard] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const getAllBoards = () => {
    return getAllBoardsApi()
      .then(boards => setBoardList(boards));
  };

  const addBoard = (newTask) => {
    return createNewBoardApi(newTask)
      .then(newBoard => {
        setBoardList(prev => [...prev, newBoard]);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllCardsForBoard = (boardId) => {
    return getAllCardsApi(boardId)
      .then(cards => setCardList(cards));
  };

  const addCard = (newCard) => {
    return createNewCardApi(newCard)
      .then(newCard => {
        setBoardList(prev => [...prev, newCard]);
      });
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
            onDisplayCards={getAllCardsForBoard}
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
