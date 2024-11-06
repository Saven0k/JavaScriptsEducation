import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNote } from "../actions/NoteActions";

const AddNote = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch(addNote(text));
        setText('');
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '250px', padding: '5px', marginRight: '25px', fontSize: '15px' }}
                placeholder="Введите текст задачи: "
            />

            <button
                className="button-add"
                onClick={handleAddNote}>
                Добавляем в список
            </button>
        </div>
    );
};

export default AddNote;