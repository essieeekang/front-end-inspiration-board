import { useState } from 'react';
import './NewBoardForm.css';
import PropTypes from 'prop-types';

const defaultFormState = { title: '', owner: '' };

const NewBoardForm = ({ onBoardAdd, onHide }) => {
  const [newBoardData, setNewBoardData] = useState(defaultFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBoardData.title.trim()) return;
    onBoardAdd({
      title: newBoardData.title.trim(),
      owner: newBoardData.owner.trim(),
    });
    setNewBoardData(defaultFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="board title"
        value={newBoardData.title}
        required
        onChange={(e) => setNewBoardData({...newBoardData, title: e.target.value})}
      />
      <input
        type='text'
        placeholder="your name"
        value={newBoardData.owner}
        required
        onChange={(e) => setNewBoardData({...newBoardData, owner: e.target.value})}
      />
      <button className='add-button' type="submit">Add Board</button>
      <button className='hide-button' onClick={onHide}>Hide</button>
    </form>
  );
};

NewBoardForm.propTypes = {
  onBoardAdd: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default NewBoardForm;
