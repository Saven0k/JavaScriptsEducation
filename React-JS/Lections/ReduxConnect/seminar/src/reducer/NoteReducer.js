import { ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE } from "../actions/NoteActions"

const initialState = []

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, {id: new Date(), text: action.payload.text, isCompleted: false}];
        case DELETE_NOTE:
            return state.filter(note => note.id !== action.payload.id)
        case TOGGLE_NOTE:
            return state.map(note => note.id === action.payload.id ? {...note, isCompleted: !note.isCompleted} : note)
        default:
            return state;
    };
};