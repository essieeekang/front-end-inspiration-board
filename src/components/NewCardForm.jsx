import { useState } from 'react';

const NewCardForm = ({ onCardAdd, boardId }) => {
  const [newCardData, setNewCardData] = useState({
    message: '',
    boardId: null,
    image: null,
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
      <input
        type='file'
        accept='image/*'
        value={newCardData.image}
        onChange={(e) => setNewCardData({...newCardData, image: e.target.value})}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default NewCardForm;