import { useState } from 'react';
// import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

const NewCardForm = ({ onCardAdd, boardId }) => {
  const [newCardData, setNewCardData] = useState({
    message: '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardFormData = new FormData();
    cardFormData.append('message', newCardData.message);
    cardFormData.append('boardId', boardId);

    if (newCardData.image) {
      cardFormData.append('image', newCardData.image);
    }

    onCardAdd(cardFormData);
    setNewCardData({ message: '', image: null});

    e.target.reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewCardData(prev => ({
      ...prev,
      image: file
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='type your message here (max 40 characters)'
        value={newCardData.message}
        maxLength='40'
        required
        onChange={(e) => setNewCardData(prev => ({
          ...prev,
          message: e.target.value
        }))}
      />
      <input
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
      <br></br>
      <button type="submit">Add Card</button>
    </form>
  );
};

NewCardForm.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default NewCardForm;