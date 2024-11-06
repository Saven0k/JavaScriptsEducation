import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/ProductActions";

const initialState = []

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, { id: new Date(), name: action.payload.name, disc: action.payload.disc, price: action.payload.price }];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id)
        default:
            return state;
    };
};