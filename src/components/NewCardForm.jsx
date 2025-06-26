import { useState } from 'react';

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
        placeholder='type your message here'
        value={newCardData.message}
        maxLength='40'
        required
        onChange={(e) => setNewCardData({boardId: boardId, message: e.target.value})}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default NewCardForm;