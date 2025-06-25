import { useState } from "react";

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
                placeholder="Type new board title here"
                value={newBoardData.title}
                required
                onChange={(e) => setNewBoardData({...newBoardData, title: e.target.value})}
            />
            <input
                type='text'
                placeholder="Type your name here"
                value={newBoardData.owner}
                required
                onChange={(e) => setNewBoardData({...newBoardData, owner: e.target.value})}
            />
        <button type="submit">Add Board</button>
        <button onClick={onHide}>Hide</button>
        </form>
    );
};

export default NewBoardForm;
