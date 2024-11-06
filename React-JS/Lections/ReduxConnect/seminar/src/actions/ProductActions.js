export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addProduct = (name, disc, price) => ({
    type: ADD_PRODUCT,
    payload: { name, disc, price },
})
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id },
})
