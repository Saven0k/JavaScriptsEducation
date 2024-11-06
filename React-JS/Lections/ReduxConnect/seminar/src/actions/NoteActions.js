export const ADD_NOTE = "ADD_NOTE";
export const TOGGLE_NOTE = "TOGGLE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (text) => ({
    type: ADD_NOTE,
    payload: { text },
})
export const toggleNote = (id) => ({
    type: TOGGLE_NOTE,
    payload: { id },
})
export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: { id },
})
