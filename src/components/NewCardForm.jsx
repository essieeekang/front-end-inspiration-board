import { useState } from 'react';
// import PropTypes from 'prop-types';

const NewCardForm = ({ onCardAdd, boardId }) => {
  const [newCardData, setNewCardData] = useState({
    message: '',
    boardId: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCardAdd(newCardData);
    setNewCardData({ message: '', boardId: null});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='type your message here (max 40 characters)'
        value={newCardData.message}
        maxLength='40'
        required
        onChange={(e) => setNewCardData({boardId: boardId, message: e.target.value})}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

// NewCardForm.propTypes = {
//   onCardAdd: PropTypes.func.isRequired,
//   boardId: PropTypes.string.isRequired,
// };

export default NewCardForm;