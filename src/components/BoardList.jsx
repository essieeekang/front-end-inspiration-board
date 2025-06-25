import Board from "./Board";
import './BoardList.css'; 


const BoardList = props => {
    const getBoardList = props.boards.map((board) => {
        return (
            <li key={board.id} className="board-list-item">
              <Board
                id={board.id}
                title={board.title}
                owner={board.owner}
              />
            </li>
        );
    });
    return <ul className="board-list">{getBoardList}</ul>;
};
    


export default BoardList;