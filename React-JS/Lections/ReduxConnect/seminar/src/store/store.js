import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from '../reducer/ProductReducer';
export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

