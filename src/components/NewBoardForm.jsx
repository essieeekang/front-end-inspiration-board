import { useState } from "react";

const NewBoardForm = ({ onBoardAdd }) => {
    const [newBoardData, setNewBoardData] = useState({
        title: '',
        owner: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onBoardAdd(newBoardData);
        setNewBoardData({ title: '', owner: ''})
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
        </form>
    );
};

export default NewBoardForm;