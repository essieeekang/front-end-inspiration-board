import { useState } from "react";

const NewCardForm = ({ onCardAdd }) => {
    const [newCardData, setNewCardData] = useState({
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onCardAdd(newCardData);
        setNewCardData({ message: ''})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Type your message here"
                value={newCardData.message}
                required
                onChange={(e) => setNewCardData({...newCardData, message: e.target.value})}
            />
            <button type="submit">Add Card</button>
        </form>
    );
};

export default NewCardForm;