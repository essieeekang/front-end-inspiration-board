import { useState } from 'react';
// import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const NewCardForm = ({ onCardAdd, boardId }) => {
  // const newCardData = new FormData();
  // formData.append('boardId', boardId);

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
      <input
        type='file'
        accept='image/*'
        value={newCardData.image}
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

NewCardForm.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default NewCardForm;