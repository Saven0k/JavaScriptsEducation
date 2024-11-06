import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../actions/ProductActions";


const initialState = []

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, { id: new Date(), name: action.payload.name, disc: action.payload.disc, price: action.payload.price, avaliabe: action.payload.avaliabe }];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id)
        case EDIT_PRODUCT:
            return [...state.filter(product => product.id !== action.payload.id), { id:action.payload.id, name: action.payload.name, disc: action.payload.disc, price: action.payload.price, avaliabe: action.payload.avaliabe }]
        default:
            return state;
    };
};

// { id: action.payload.name, name: action.payload.name, disc: action.payload.disc, price: action.payload.price, avaliabe: true }