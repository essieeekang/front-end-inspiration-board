import { useState } from 'react';
import './App.css';
import data from '../data.json';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

const VITE_APP_BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL

function App() {
  const [boardList, setBoardList] = useState(data);
  // const [selectedBoard, setSelectedBoard] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const addBoard = (newBoard) => {
    setBoardList(prev => [...prev, newBoard]);
  };

  const handleHideForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <>
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
            <h4>Board Form</h4>
            {!showForm && (
              <button onClick={handleHideForm}>Show Form</button>
            )}
            {showForm && (
            <NewBoardForm
              onBoardAdd={addBoard}
              onHide={handleHideForm}
            />
            )}
          </section>
          
          <section className='card-area'>
            {/* <CardList/BoardDetails goes here /> */}
            {/* {selectedBoard ? (<CardList board={selectedBoard} />) : (<p>Select a board to see its cards</p>)} */}
          </section>
        </main>

      </div>
      
      
    </>
  );
};

export default App;
