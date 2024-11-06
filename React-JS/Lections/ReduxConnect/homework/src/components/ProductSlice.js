import { createSlice } from '@reduxjs/toolkit'
const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
    },
    reducers: {
        addProduct: (state, product) => {
            [...state, product]
        },
        deleteProduct: (state, id) => {
            state.filter(product => product.id !== id)
        },
        editProduct: (state, product) => {
            [...state, product]
        }
    }
});

export default productSlice.reducer;
export const {addProduct, deleteProduct, editProduct} = productSlice.actions;


// Ничего не получилось