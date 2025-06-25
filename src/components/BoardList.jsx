import Board from './Board';
import './BoardList.css';


const BoardList = props => {
  const getBoardList = props.boards.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        onDisplayCards={props.onDisplayCards}
      />
    );
  });
  return <ul className="board-list">{getBoardList}</ul>;
};

export default BoardList;