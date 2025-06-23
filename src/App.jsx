import { useState } from 'react';
import './App.css';
import data from '../data.json';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';


function App() {
  const [boardList, setBoardList] = useState(data);

  const addBoard = (newBoard) => {
    setBoardList(prev => [...prev, newBoard]);
  };

  return (
    <>
      <h1>Board Form</h1>
      <NewBoardForm onBoardAdd={addBoard}></NewBoardForm>
      <h1>Boards</h1>
      <BoardList
        boards={boardList}
      />
    </>
  );
};

export default App;
