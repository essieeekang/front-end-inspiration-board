import Board from './Board';
import './BoardList.css';


const BoardList = props => {
  const owners = Object.keys(props.groupedBoards).sort();
  return (
    <div className='board-list'>
      {owners.map((owner) => (
        <div key={owner} className='owner-group'>
          <h4>{owner}</h4>
          <ul>
            {props.groupedBoards[owner].map((board) => (
              <Board
                key={board.id}
                id={board.id}
                title={board.title}
                owner={board.owner}
                onDisplayCards={props.onDisplayCards}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BoardList;

