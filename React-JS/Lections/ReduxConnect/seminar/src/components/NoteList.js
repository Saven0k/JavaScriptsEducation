import { deleteNote, toggleNote } from "../actions/NoteActions";

import { useSelector, useDispatch } from "react-redux"

const NoteList = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleToggleNote = (id) => {
        dispatch(toggleNote(id))
    }
    const clickDeleteNote = (id) => {
        dispatch(deleteNote(id))
    }

    return (
        <ul>
            {notes.map(note => (
                <li
                    key={note.id}
                    onMouseOver={() => handleToggleNote(note.id)}
                    onClick={() => {clickDeleteNote(note.id)}}
                    style={{ textDecoration: note.isCompleted ? 'line-through' : 'none', width: '100px', margin: '25px 0', fontSize: '17px'}}
                >
                    {note.text}
                </li>
            ))}
        </ul>
    )
}

export default NoteList;
