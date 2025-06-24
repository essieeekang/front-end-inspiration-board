import { useState } from 'react';
import './App.css';
import data from '../data.json';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';


function App() {
  const [boardList, setBoardList] = useState(data);

  const [showForm, setShowForm] = useState(false);

  const addBoard = (newBoard) => {
    setBoardList(prev => [...prev, newBoard]);
  };

  const handleHideForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <>
      <h1>Board Form</h1>
      {!showForm && (
        <button onClick={handleHideForm}>Show Form</button>
      )}
      {showForm && (
      <NewBoardForm
        onBoardAdd={addBoard}
        onHide={handleHideForm}
      />
    )}
      <h1>Boards</h1>
      <BoardList
        boards={boardList}
      />
    </>
  );
};

export default App;
