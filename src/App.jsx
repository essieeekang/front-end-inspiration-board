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
  const [selectedBoard, setSelectedBoard] = useState({id: null, title: '', owner: ''});

  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [currentSort, setCurrentSort] = useState(null);

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

  const selectBoard = (board) => {
    setSelectedBoard(board);

    return getAllCardsApi(board.id, currentSort)
      .then(cards => setCardList(cards));
  };

  const addCard = (newCard) => {
    return createNewCardApi(newCard)
      .then(newCard => {
        setCardList(prev => [...prev, newCard]);
      });
  };

  const likeCard = (id) => {
    return likeCardApi(id)
      .then(likedResult => {
        setCardList(cardList => cardList.map(card => {
          if (card.id === likedResult.id) {
            return likedResult;
          } else {
            return card;
          }
        }));
      });
  };

  const removeCard = (id) => {
    return removeCardApi(id)
      .then(() => {
        setCardList(cardList => cardList.filter(card => {
          return card.id !== id;
        }));
      });
  };

  const handleHideForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleSort = sortType => {
    setCurrentSort(sortType);

    if (selectedBoard.id) {
      getAllCardsApi(selectedBoard.id, sortType)
        .then(cards => setCardList(cards));
    }

    setShowFilter(false);
  };

  const groupBoardNamesByOwner = boards => {
    const grouped = {};
    boards.forEach((board) => {
      const owner = board.owner;
      if (!grouped[owner]) {
        grouped[owner] = [];
      }
      grouped[owner].push(board);
    });
    return grouped;
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
            onDisplayCards={selectBoard}
            groupedBoards={groupBoardNamesByOwner(boardList)}
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
        {selectedBoard.id && (
          <section className='card-area'>
            <div className='corkboard-container'>
              <div className='title-container'>
                <h1>
                  {selectedBoard.title}
                  <div className='dropdown'>
                    <button className='filter-button' onClick={() => setShowFilter(!showFilter)}>↑↓</button>
                    {showFilter && (
                      <div className='dropdown-content'>
                        <button onClick={() => handleSort('likes')}>Most Liked</button>
                        <button onClick={() => handleSort('alphabetic')}>Alphabetically</button>
                        <button onClick={() => handleSort(null)}>ID</button>
                      </div>
                    )}
                  </div>
                </h1>
              </div>
              <CardList
                cards={cardList}
                onLikeCard={likeCard}
                onDeleteCard={removeCard}
              />
            </div>
            <NewCardForm onCardAdd={addCard} boardId={selectedBoard.id}></NewCardForm>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
