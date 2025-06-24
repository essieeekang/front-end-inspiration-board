import Board from "./Board";


const BoardList = props => {
  const getBoardList = props.boards.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
      />
    );
  });
  return <ul className="">{getBoardList}</ul>;
};

export default BoardList;