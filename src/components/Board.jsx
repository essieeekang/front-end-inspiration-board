

const Board = ({ id, title, owner, onDisplayCards }) => {
  return (
    <li className="board-list-item" onClick={() => onDisplayCards({ id, title, owner })}>{`${title}`}</li>
  );
};

export default Board;