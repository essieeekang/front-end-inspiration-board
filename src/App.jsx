import { useState } from 'react'
import './App.css'
import data from '../data.json'
import BoardList from './components/BoardList'


function App() {
  const [boardList, setBoardList] = useState(data)
  console.log(boardList)

  return (
    <>
      <h1>Boards</h1>
      <BoardList
        boards={boardList}
      />
    </>
  )
}

export default App
