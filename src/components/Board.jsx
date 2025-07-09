import PropTypes from 'prop-types';

const Board = ({ id, title, owner, onDisplayCards }) => {
  return (
    <li className="board-list-item" onClick={() => onDisplayCards({ id, title, owner })}>{`${title}`}</li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onDisplayCards: PropTypes.func.isRequired,
};

export default Board;